import { ProductModel } from "./product.model"

export interface HttpResponseModel {
    status: number,
    message: string,
    data: ProductModel | object | null
    error: object | null
}