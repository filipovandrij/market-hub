import MenuItem from './MenuItem'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Announcements</MenuItem>
            <MenuItem to="/about">About</MenuItem>
            <MenuItem to="/Favorite">Favorite</MenuItem>
            <MenuItem to="/shipping">Shipping</MenuItem>
            <MenuItem to="/cart">Cart</MenuItem>
        </>
    )
}
export default Menu
