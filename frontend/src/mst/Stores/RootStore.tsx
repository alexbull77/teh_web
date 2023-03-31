import {
  applySnapshot,
  destroy,
  flow,
  toGenerator,
  types,
} from "mobx-state-tree";
import { createContext, useContext } from "react";
import axios from "axios";
import { PostModel } from "../Models/PostModel";
import { ProductsModel } from "../Models/ProductModel";
import {
  IPostModel,
  IPostModelSnapshotIn,
  IPostModelSnapshotOut,
  IProductModel,
  IProductModelSnapshotIn,
  IProductModelSnapshotOut,
  IRootStore,
  IUserModel,
  IUserModelSnapshotIn,
  IUserModelSnapshotOut,
} from "../Interfaces";
import { UserModel } from "../Models/UserModel";

export const RootStore: IRootStore = types
  .model("RootStore", {
    products: types.array<IPostModelSnapshotOut>(ProductsModel),
    posts: types.array<IPostModelSnapshotOut>(PostModel),
    selectedPost: types.safeReference<IPostModelSnapshotOut>(PostModel),
    selectedProduct:
      types.safeReference<IProductModelSnapshotOut>(ProductsModel),
    registeredUsers: types.array<IUserModelSnapshotOut>(UserModel),
    currentUser: types.safeReference<IUserModelSnapshotOut>(UserModel),
  })

  .views((self) => ({
    get haveProducts(): boolean {
      return !!self.products.length;
    },

    get havePosts(): boolean {
      return !!self.posts.length;
    },

    get haveUsers(): boolean {
      return !!self.registeredUsers.length;
    },

    findPostById(id: string): IPostModelSnapshotOut | undefined {
      return self.posts.find((post: IPostModelSnapshotOut) => post.id === id);
    },

    findProductById(id: string): IProductModel | undefined {
      return self.products.find(
        (product: IProductModelSnapshotOut) => product.id === id
      );
    },

    findUserByUsernameAndPassword({
      username,
      password,
    }: IUserModelSnapshotOut): IUserModel | undefined {
      return self.registeredUsers.find(
        (user: IUserModelSnapshotOut) =>
          user.username === username && user.password === password
      );
    },

    userIsRegistered(user: IUserModelSnapshotOut): boolean {
      // to satisfy typescript
      return !!this.findUserByUsernameAndPassword(user);
    },
  }))

  .actions((self) => ({
    resetSelectedProduct() {
      self.selectedProduct = undefined;
    },

    selectProductById(id: string) {
      self.selectedProduct = self.products.find(
        (product: IProductModelSnapshotOut) => product.id === id
      );
    },

    resetSelectedPost() {
      self.selectedPost = undefined;
    },

    resetCurrentUser() {
      self.currentUser = undefined;
    },

    selectPostById(id: string) {
      self.selectedPost = self.posts.find(
        (post: IPostModelSnapshotOut) => post.id === id
      );
    },

    removeProductById(id: string) {
      const _products = self.products.filter(
        (product: IProductModelSnapshotOut) => product.id !== id
      );
      applySnapshot(self.products, _products);
    },

    fetchProducts: flow(function* () {
      try {
        const products = yield* toGenerator(
          axios
            .get("https://dummyjson.com/products")
            .then((response) => response.data.products)
        );

        const _products: IProductModelSnapshotIn[] = products.map(
          (product: IProductModelSnapshotIn) => {
            return {
              id: String(product.id),
              title: product.title,
              description: product.description,
              price: product.price,
              image: product.thumbnail,
              discountPercentage: product.discountPercentage,
            };
          }
        );

        applySnapshot(self.products, _products);
      } catch (e) {
        console.log(">>e", e);
      }
    }),

    fetchPosts: flow(function* () {
      try {
        const posts = yield* toGenerator(
          axios
            .get("https://dummyjson.com/posts")
            .then((response) => response.data.posts)
        );

        const _posts = posts.map((post: IPostModelSnapshotIn) => {
          return {
            id: String(post.id),
            title: post.title,
            body: post.body,
            tags: post.tags,
          };
        });

        applySnapshot(self.posts, _posts);
      } catch (e) {
        console.log(">>e", e);
      }
    }),

    fetchUsers: flow(function* () {
      try {
        const users = yield* toGenerator(
          axios
            .get("https://dummyjson.com/users")
            .then((response) => response.data.users)
        );

        const _users: IUserModel = users.map((user: IUserModelSnapshotIn) => {
          return {
            id: String(user.id),
            username: user.username,
            password: user.password,
          };
        });

        applySnapshot(self.registeredUsers, _users);
      } catch (e) {
        console.log(">>e", e);
      }
    }),

    removePost(post: IPostModel) {
      destroy(post);
    },

    addPost: flow(function* (post: IPostModel) {
      try {
        const response = yield axios.post(`https://dummyjson.com/posts/`, {
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(post),
        });
        console.log(response);
        self.posts.push(post);
      } catch (e) {
        console.log(">>e", e);
      }
    }),

    setCurrentUser(newUser: IPostModel) {
      const user: IUserModel | undefined =
        self.findUserByUsernameAndPassword(newUser);
      if (user) {
        // localStorage.setItem(user.id, JSON.stringify(user));
        self.currentUser = user;
        console.log(self.currentUser);
        return true;
      } else {
        return false;
      }
    },

    registerUser: flow(function* (newUser: IPostModelSnapshotIn) {
      try {
        const response = yield axios.post(`https://dummyjson.com/users/`, {
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });
        console.log(response);
        self.registeredUsers.push(newUser);
        console.log(newUser.id);
      } catch (e) {
        console.log(">>e", e);
      }
    }),
  }));

export const store = RootStore.create({});

export const ContextRootStore = createContext(store);

export const useRootStore = () => useContext(ContextRootStore);
