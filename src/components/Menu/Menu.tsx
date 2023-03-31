import './Menu.scss'
import { Button, Container } from '@mui/material'
import MenuItem from './MenuItem/MenuItem'
import HeaderSearch from 'components/Search/HeaderSearch'

type Props = {
    query: string
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSearch: () => void
}
const Menu = ({ query, handleInputChange, handleSearch }: Props) => {
    return (
        <>
            <Container className="menu-container">
                <HeaderSearch
                    query={query}
                    handleInputChange={handleInputChange}
                    handleSearch={handleSearch}
                />
                <Button>
                    <MenuItem to="/">Announcements</MenuItem>
                </Button>

                <Button>
                    <MenuItem to="/addNewProduct">Add product</MenuItem>
                </Button>
                <Button>
                    <MenuItem to="/cart">Basket</MenuItem>
                </Button>
            </Container>
        </>
    )
}
export default Menu
