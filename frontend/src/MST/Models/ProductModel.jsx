import { types } from "mobx-state-tree";

export const ProductsModel = types.model("ProductsModel", {
    id: types.optional(types.identifier, String(Date.now())),
    title: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    price: types.optional(types.number, 0),
    image: types.optional(types.string, ""),
});
