import { Button } from '@mui/material'
import MenuItem from './MenuItem'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button>
                <MenuItem to="/">Announcements</MenuItem>
            </Button>
            <Button>
                <MenuItem to="/about">About</MenuItem>
            </Button>
            <Button>
                <MenuItem to="/Favorite">Favorite</MenuItem>
            </Button>
            <Button>
                <MenuItem to="/shipping">Shipping</MenuItem>
            </Button>
            <Button>
                <MenuItem to="/cart">Cart</MenuItem>
            </Button>
        </>
    )
}
export default Menu
