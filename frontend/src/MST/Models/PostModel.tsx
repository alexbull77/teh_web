import { flow, getParent, types } from "mobx-state-tree";
import axios from "../../axios";
import {IPostModel} from "../Interfaces";

export const PostModel = types
  .model("PostModel", {
    id: types.optional(types.identifier, String(Date.now())),
    title: "",
    body: "",
    tags: types.array(types.string),
  })
  .actions((self : IPostModel) => ({
    changeTitle(newTitle: string) {
      self.title = newTitle;
    },

    changeBody(newBody: string) {
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
        // need to access the root store, that's why we are going 2 parents up
        // and then calling the method of the store
        // only in case of backend remove is successful
        getParent(self, 2).removePost(self);
      } catch (e) {
        console.log(">>e", e);
      }
    }),
  }));
