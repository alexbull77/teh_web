import {types} from "mobx-state-tree";

export const UserModel = types
 .model("UserModel", {
     id: types.optional(types.identifier, String(Date.now())),
     username: '',
     password: '',
 })
.actions(self => ({
    changeUsername(newUsername: string) {
         self.username = newUsername;
    },
    changePassword(newPassword: string) {
        self.password = newPassword;
    },
  }))