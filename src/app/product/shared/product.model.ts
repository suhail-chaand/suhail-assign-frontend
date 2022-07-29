export interface ProductModel {
    id: number,
    category: string,
    model: string,
    brand: string,
    name: string,
    tagline: string,
    description: string,
    price: number,
    images: {
        id: number,
        product_id: number,
        image_url: string
    }[]
}