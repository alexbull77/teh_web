import { types } from "mobx-state-tree";

export const PostModel = types.model("PostModel", {
    id: types.optional(types.identifier, String(Date.now())),
    title: types.optional(types.string, ""),
    body: types.optional(types.string, ""),
    tags: types.array(types.string),
});
