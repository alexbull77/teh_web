import { applySnapshot, flow, toGenerator, types } from "mobx-state-tree";
import { createContext, useContext } from "react";
import axios from "../../axios";
import { PostModel } from "../Models/PostModel";
import { ProductsModel } from "../Models/ProductModel";

const RootStore = types
    .model("RootStore", {
        products: types.array(ProductsModel),
        posts: types.array(PostModel),
        // selected_product: types.safeReference(ProductsModel),
    })

    .views((self) => ({
        get haveProducts() {
            return !!self.products.length;
        },

        get havePosts() {
            return !!self.posts.length;
        },
    }))

    .actions((self) => ({
        resetSelectedProduct() {
            self.selected_product = undefined;
        },

        selectProductById(id) {
            self.selected_product = self.products.find(
                (product) => product.id === id
            );
        },

        removeProductById(id) {
            const _products = self.products.filter(
                (product) => product.id !== id
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

                const _products = products.map((product) => {
                    return {
                        id: String(product.id),
                        title: product.title,
                        description: product.description,
                        price: product.price,
                        image: product.thumbnail,
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

                const _posts = posts.map((post) => {
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

        deletePost: flow(function* deletePost(id) {
            // server-side delete
            try {
                console.log(id);
                const response = yield axios.delete(
                    `https://dummyjson.com/posts/${id}`
                );
                console.log(response);
            } catch (e) {
                console.log(">>e", e);
            }
            // client-side delete
            self.posts = self.posts.filter((post) => post.id !== id);
        }),
    }));

export const store = RootStore.create({});

export const ContextRootStore = createContext(store);

export const useRootStore = () => useContext(ContextRootStore);
