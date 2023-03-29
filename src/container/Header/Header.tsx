import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Logo from 'components/Logo/Logo'
import { Container } from '@mui/system'
import './Header.scss'
import Menu from 'components/Menu/Menu'
import CartHeader from 'components/CartHeader/CartHeader'
import { Link } from 'react-router-dom'
import { useAppSelector } from 'redux/hooks'

const Header = () => {
    return (
        <AppBar position="static" className="app-bar">
            <Container>
                <Toolbar>
                    <Link to="/" className="reset-logo">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Logo />
                        </IconButton>
                    </Link>
                    <Container className="link-bar">
                        <Menu />
                        <CartHeader />
                    </Container>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
