import { types } from "mobx-state-tree"
import { v4 as uuidv4 } from "uuid"
import { IProductModel } from "../Interfaces"

export const ProductsModel = types.model("ProductsModel", {
    id: types.optional(types.identifier, () => uuidv4()),
    title: "",
    description: "",
    discountPercentage: 0,
    price: 0,
    thumbnail: "",
})
