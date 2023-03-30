import {
    applySnapshot,
    destroy,
    flow,
    toGenerator,
    types,
} from "mobx-state-tree";
import {createContext, useContext} from "react";
import axios from "axios";
import {PostModel} from "../Models/PostModel";
import {ProductsModel} from "../Models/ProductModel";
import {
    IPostModel,
    IPostModelSnapshotIn,
    IProductModel,
    IProductModelSnapshotIn,
    IRootStore, IUserModel, IUserModelSnapshotIn,
} from "../Interfaces";
import {UserModel} from "../Models/UserModel";

export const RootStore = types
    .model("RootStore", {
        products: types.array<IProductModel>(ProductsModel),
        posts: types.array<IPostModel>(PostModel),
        selectedPost: types.safeReference(PostModel),
        selectedProduct: types.safeReference(ProductsModel),
        registeredUsers: types.array<IUserModel>(UserModel),
    })

    .views((self: IRootStore) => ({
        get haveProducts() {
            return !!self.products.length;
        },

        get havePosts() {
            return !!self.posts.length;
        },

        findPostById(id: string) {
            return self.posts.find((post: IPostModel) => post.id === id);
        },

        findProductById(id: string) {
            return self.products.find((product: IProductModel) => product.id === id);
        },

        findUserByUsernameAndPassword({ username, password}) {
            return self.registeredUsers.find((user: IUserModel) => user.username === username && user.password === password);
        }
    }))

    .actions((self: IRootStore) => ({
        resetSelectedProduct() {
            self.selectedProduct = undefined;
        },

        selectProductById(id) {
            self.selectedProduct = self.products.find(
                (product: IProductModel) => product.id === id
            );
        },

        resetSelectedPost() {
            self.selectedPost = undefined;
        },

        selectPostById(id) {
            self.selectedPost = self.posts.find(
                (post: IPostModel) => post.id === id
            );
        },

        removeProductById(id: string) {
            const _products = self.products.filter((product: IProductModel) => product.id !== id);
            applySnapshot(self.products, _products);
        },

        fetchProducts: flow(function* () {
            try {
                const products = yield* toGenerator(
                    axios
                        .get("https://dummyjson.com/products")
                        .then((response) => response.data.products)
                );

                const _products: IProductModelSnapshotIn[] = products.map((product) => {
                    return {
                        id: String(product.id),
                        title: product.title,
                        description: product.description,
                        price: product.price,
                        image: product.thumbnail,
                        discountPercentage: product.discountPercentage,
                    };
                });

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
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(post),
                });
                console.log(response);
                self.posts.push(post);
            } catch (e) {
                console.log(">>e", e);
            }
        }),

        saveUserToStorage(newUser: IPostModel) {
            const user : IUserModel | undefined = self.findUserByUsernameAndPassword(newUser);
            if (user) {
                localStorage.setItem(user.id, JSON.stringify(user));
                return true;
            } else {return false }
        }
    }));

export const store = RootStore.create({});

export const ContextRootStore = createContext(store);

export const useRootStore = () => useContext(ContextRootStore);
