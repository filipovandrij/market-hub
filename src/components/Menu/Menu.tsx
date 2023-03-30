import './Menu.scss'
import { Button, Container } from '@mui/material'
import MenuItem from './MenuItem/MenuItem'
import MySelect from 'components/Search/Search'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Container className="menu-container">
                <MySelect />
                <Button>
                    <MenuItem to="/">Announcements</MenuItem>
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
            </Container>
        </>
    )
}
export default Menu
