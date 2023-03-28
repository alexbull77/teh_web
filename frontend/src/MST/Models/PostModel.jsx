import { destroy, flow, types } from "mobx-state-tree";
import axios from "../../axios";

export const PostModel = types
    .model("PostModel", {
        id: types.optional(types.identifier, String(Date.now())),
        title: types.optional(types.string, ""),
        body: types.optional(types.string, ""),
        tags: types.array(types.string),
    })

    // .views((self) => ({
    //     get title() {
    //         return self.title;
    //     },

    //     get body() {
    //         return self.body;
    //     },
    // }))

    .actions((self) => ({
        changeTitle(newTitle) {
            self.title = newTitle;
        },

        changeBody(newBody) {
            self.body = newBody;
        },

        edit: flow(function* () {
            try {
                const response = yield axios.patch(
                    `https://dummyjson.com/posts/${self.id}`,
                    {
                        self,
                    }
                );
                console.log(response);
            } catch (e) {
                console.log(">>e", e);
            }
        }),

        delete: flow(function* () {
            try {
                const response = yield axios.delete(
                    `https://dummyjson.com/posts/${self.id}`
                );
                console.log(response);
                // client-side delete when server returns promise fulfilled
                destroy(self);
            } catch (e) {
                console.log(">>e", e);
            }
        }),
    }));
