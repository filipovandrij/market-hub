
export type Product = {
    id: number
    title: string
    description: string
    category: string
    price: number
    image: string
    rating: number
    stock: number
}

export const getProductsObject = (productsArray: Product[]) =>
        productsArray.reduce(
            (object, product) => ({
                ...object,
                [product.id]: product,
            }),
            {}
        )