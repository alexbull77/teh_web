import {
  applySnapshot,
  destroy,
  flow,
  toGenerator,
  types,
} from "mobx-state-tree";
import { createContext, useContext } from "react";
import axios from "../../axios";
import { PostModel } from "../Models/PostModel.js";
import { ProductsModel } from "../Models/ProductModel.js";
import { IPostModel, IProductModel } from "../Interfaces";

export const RootStore = types
  .model("RootStore", {
    products: types.optional(types.array(ProductsModel), []),
    posts: types.optional(types.array(PostModel), []),
  })

  .views((self) => ({
    get haveProducts() {
      return !!self.products.length;
    },

    get havePosts() {
      return !!self.posts.length;
    },

    findPostById(id: string) {
      return self.posts.find((post) => post.id === id);
    },

    findProductById(id: string) {
      return self.products.find((product) => product.id === id);
    },
  }))

  .actions((self) => ({
    // resetSelectedProduct() {
    //   self.selected_product = undefined;
    // },
    //
    // selectProductById(id) {
    //   self.selected_product = self.products.find(
    //     (product) => product.id === id
    //   );
    // },

    removeProductById(id: string) {
      const _products = self.products.filter((product) => product.id !== id);
      applySnapshot(self.products, _products);
    },

    fetchProducts: flow(function* () {
      try {
        const products = yield* toGenerator(
          axios
            .get("https://dummyjson.com/products")
            .then((response) => response.data.products)
        );

        const _products = products.map((product: IProductModel) => {
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

        const _posts = posts.map((post: IPostModel) => {
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

    removePost(post: IPostModel) {
      destroy(post);
    },

    addPost: flow(function* (post) {
      try {
        const response = yield axios.post(`https://dummyjson.com/posts/`, {
          headers: { "Content-Type": "application/json" },
          // body: JSON.stringify({
          //     ...post,
          //     id: parseInt(post.id),
          // }),
          body: JSON.stringify(post),
        });
        console.log(response);
        self.posts.push(post);
      } catch (e) {
        console.log(">>e", e);
      }
    }),
  }));

export const store = RootStore.create({});

export const ContextRootStore = createContext(store);

export const useRootStore = () => useContext(ContextRootStore);
