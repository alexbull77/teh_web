import { types } from "mobx-state-tree";
import { IProductModel } from "../Interfaces";
import { v4 as uuidv4 } from "uuid";

export const ProductsModel: IProductModel = types.model("ProductsModel", {
  id: types.optional(types.identifier, () => uuidv4()),
  title: "",
  description: "",
  discountPercentage: 0,
  price: 0,
  image: "",
});
