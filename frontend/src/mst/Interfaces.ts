import { RootStore } from "./Stores/RootStore";
import { Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import { ProductsModel } from "./Models/ProductModel";
import { PostModel } from "./Models/PostModel";
import {UserModel} from "./Models/UserModel";

export interface IRootStore extends Instance<typeof RootStore> {}
export interface IRootStoreSnapshotIn extends SnapshotIn<typeof RootStore> {}
export interface IRootStoreSnapshotOut extends SnapshotOut<typeof RootStore> {}

export interface IProductModel extends Instance<typeof ProductsModel> {}
export interface IProductModelSnapshotIn
  extends SnapshotIn<typeof ProductsModel> {}
export interface IProductModelSnapshotOut
  extends SnapshotOut<typeof ProductsModel> {}

export interface IPostModel extends Instance<typeof PostModel> {}
export interface IPostModelSnapshotIn extends SnapshotIn<typeof PostModel> {}
export interface IPostModelSnapshotOut extends SnapshotOut<typeof PostModel> {}

export interface IUserModel extends Instance<typeof UserModel> {}
export interface IUserModelSnapshotIn extends SnapshotIn<typeof UserModel> {}
export interface IUserModelSnapshotOut extends SnapshotOut<typeof UserModel> {}