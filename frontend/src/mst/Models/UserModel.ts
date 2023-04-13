import { types } from "mobx-state-tree"
import { v4 as uuidv4 } from "uuid"
import { IUserModel } from "../Interfaces"

export const UserModel = types
    .model("UserModel", {
        id: types.optional(types.identifier, () => uuidv4()),
        username: "",
        password: "",
    })
    .actions((self) => ({
        changeUsername(newUsername: string) {
            self.username = newUsername
        },
        changePassword(newPassword: string) {
            self.password = newPassword
        },
    }))
