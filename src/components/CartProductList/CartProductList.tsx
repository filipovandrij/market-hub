import { useAppSelector } from 'redux/hooks'
import CartProductListItem from './CartProductListItem'

type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

type ProductsObject = {
    [id: number]: Product
}

type Props = {
    productsInCart: {
        [id: number]: number
    }
    CartItem?: any
}

const CartProductList = ({
    productsInCart,
    CartItem = CartProductListItem,
}: Props) => {
    const productsArray = useAppSelector((state) => state.products)

    const getProductsObject = (productsArray: Product[]) =>
        productsArray.reduce(
            (object, product) => ({
                ...object,
                [product.id]: product,
            }),
            {}
        )

    const productsObject: ProductsObject = getProductsObject(productsArray)
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={productsInCart[parseInt(productId)]}
                />
            ))}
        </>
    )
}
export default CartProductList
