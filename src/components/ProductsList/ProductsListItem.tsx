import { CardActions, Button, Card, CardContent, Rating } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import './ProductsListItem.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import { addProductToCart } from 'redux/cartReducer'

type Props = {
    id: number
    title: string
    description: string
    category: string
    price: number
    image: string
    rating: number
    stock: number
}

const ProductsListItem = ({
    id,
    title,
    description,
    price,
    image,
    category,
    stock,
    rating,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    const isLiked = useAppSelector((state) => state.productLikeState[id])
    const dispatch = useAppDispatch()

    return (
        <Card variant="outlined" className="product">
            <CardContent>
                <Button
                    variant="outlined"
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>

                <div className="product-title">{title}</div>
                <div className="product-desc">{description}</div>
                <div className="product-features">Category: {category}</div>
                <div className="product-features">
                    Remaining {stock} products{' '}
                </div>
                <div className="product-price">{price}$</div>
            </CardContent>
            <Rating
                name="half-rating"
                defaultValue={rating}
                precision={0.1}
                readOnly
            />
            <Quantity
                count={count}
                onDecrement={onDecrement}
                onIncrement={onIncrement}
                stock={stock}
            />
            <CardActions className="product-btn-wrap">
                <Button
                    variant="outlined"
                    onClick={() => dispatch(addProductToCart({ id, count }))}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductsListItem
