import { Button, TextField } from '@mui/material'

type Props = {
    stock: any
    onDecrement: () => void
    onIncrement: () => void
    count: number
    minCount?: number
}
const Quantity = ({
    stock,
    onDecrement,
    onIncrement,
    count,
    minCount = 1,
}: Props) => {
    return (
        <div className="product-quantity">
            <Button
                variant="outlined"
                onClick={() => onDecrement()}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField size="small" value={count} />
            <Button
                variant="outlined"
                onClick={() => onIncrement()}
                disabled={count >= stock}
            >
                +
            </Button>
        </div>
    )
}
export default Quantity
