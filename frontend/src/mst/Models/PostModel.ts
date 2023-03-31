import { cast, flow, getParent, types } from "mobx-state-tree";
import axios from "axios";
import { IPostModel } from "../Interfaces";
import { v4 as uuidv4 } from "uuid";

export const PostModel: IPostModel = types
  .model("PostModel", {
    id: types.optional(types.identifier, () => uuidv4()),
    title: "",
    body: "",
    tags: types.array(types.string),
  })
  .actions((self) => ({
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
        getParent(self, 2).removePost(cast(self));
      } catch (e) {
        console.log(">>e", e);
      }
    }),
  }));
