import './ProductCard.scss'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { TextField } from '@mui/material'

type Props = {
    id: number
    title: string
    author: string
    description: string
    price: number
    image: string
    rating: number
    stock: number
    category: string
}
const ProductCard = ({
    id,
    title,
    author,
    description,
    price,
    image,
    rating,
    stock,
    category,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }
    return (
        <Card key={id} className="product-card" sx={{ maxWidth: 330 }}>
            <CardMedia
                sx={{ height: 200, width: 100 }}
                image={image}
                title="фото 5"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title} / {author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography>Price:{price}</Typography>
                <Typography>Rating:{rating}</Typography>
                <Typography>Categoty:{category}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="outlined"
                    onClick={() => onDecrement()}
                    disabled={count <= 0}
                >
                    -
                </Button>
                <TextField className="count-field" size="small" value={count} />
                <Button
                    variant="outlined"
                    onClick={() => onIncrement()}
                    disabled={count >= stock}
                >
                    +
                </Button>
            </CardActions>
            <Button size="small" variant="contained">
                Add to Cart( осталось{stock})
            </Button>
        </Card>
    )
}
export default ProductCard
