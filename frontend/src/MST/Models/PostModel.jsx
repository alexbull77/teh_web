import { flow, toGenerator, types } from "mobx-state-tree";
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
        edit(title, body) {
            self.title = title;
            self.body = body;
        },
    }));
