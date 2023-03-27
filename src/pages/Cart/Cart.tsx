import { Container } from '@mui/material'
import ProductCard from '../../component/ProductCard/ProductCard'

type Props = {}

const Cart = (props: Props) => {
    return (
        <div className="container-cards">
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default Cart
