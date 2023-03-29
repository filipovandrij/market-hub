import Header from 'container/Header/Header'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { Container, StyledEngineProvider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import CartPage from 'pages/Cart/CartPage'
import CheckoutPage from 'pages/Checkout/CheckoutPage'
import Favorite from 'pages/Favorite/Favorite'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Container
                sx={{
                    padding: '60px 0',
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />

                    <Route path="favorite" element={<Favorite />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
