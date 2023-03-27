import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import Cart from '../../pages/Cart/Cart'
import CreateProduct from '../../pages/CreateProduct/CreateProduct'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'

type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/newProduct" element={<CreateProduct />}></Route>
            </Routes>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
