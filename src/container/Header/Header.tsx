import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import StoreIcon from '@mui/icons-material/Store'
import { Link } from 'react-router-dom'
import Menu from '../../component/Menu/Menu'
import './Header.scss'

type Props = {}
const Header = (props: Props) => {
    return (
        <AppBar position="static" className="app-bar">
            <Toolbar className="toolbar">
                <Link className="main-link" to="/">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                        <StoreIcon />
                    </IconButton>

                    <Typography className="main-logo">Market Hub</Typography>
                </Link>
                <Menu />
            </Toolbar>
        </AppBar>
    )
}
export default Header
