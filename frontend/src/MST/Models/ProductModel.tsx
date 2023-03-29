import { types } from "mobx-state-tree";

export const ProductsModel = types.model("ProductsModel", {
  id: String(Date.now()),
  title: "",
  description: "",
  discountPercentage: 0,
  price: 0,
  image: "",
});
