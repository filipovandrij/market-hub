
export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

export const getProductsObject = (productsArray: Product[]) =>
        productsArray.reduce(
            (object, product) => ({
                ...object,
                [product.id]: product,
            }),
            {}
        )