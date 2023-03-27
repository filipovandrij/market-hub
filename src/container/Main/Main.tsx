import { Container } from '@mui/material'
import ProductCard from '../../component/ProductCard/ProductCard'
import booksArray from '../../utils/array'
import './Main.scss'

type Props = {}
const Main = (props: Props) => {
    return (
        <Container maxWidth="xl" className="container-cards ">
            {booksArray.map(
                ({
                    id,
                    title,
                    author,
                    description,
                    price,
                    image,
                    rating,
                    stock,
                    category,
                }) => (
                    <ProductCard
                        id={id}
                        title={title}
                        author={author}
                        description={description}
                        price={price}
                        image={image}
                        rating={rating}
                        stock={stock}
                        category={category}
                    />
                )
            )}
        </Container>
    )
}
export default Main
