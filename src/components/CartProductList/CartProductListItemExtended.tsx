import { Button, Card, CardActions, CardContent, Grid } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Product } from 'utils/FunctionalAndType'
import Quantity from 'components/Quantity/Quantity'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { changeProductQuantity, removeProductFromCart } from 'redux/cartReducer'

type Props = {
    product: Product
    productCount: number
}

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    const dispatch = useAppDispatch()

    const productsArray = useAppSelector((state) => state.products)

    console.log(productsArray[1].stock)

    return (
        <Grid item>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.title}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                    {productsArray.map(({ stock, id }) =>
                        id === product.id ? (
                            <Quantity
                                stock={stock}
                                count={productCount}
                                onDecrement={() =>
                                    productCount <= 1
                                        ? dispatch(
                                              removeProductFromCart(product.id)
                                          )
                                        : dispatch(
                                              changeProductQuantity({
                                                  id: product.id,
                                                  count: productCount - 1,
                                              })
                                          )
                                }
                                onIncrement={() =>
                                    dispatch(
                                        changeProductQuantity({
                                            id: product.id,
                                            count: productCount + 1,
                                        })
                                    )
                                }
                                minCount={0}
                            />
                        ) : null
                    )}
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            dispatch(removeProductFromCart(product.id))
                        }
                    >
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
