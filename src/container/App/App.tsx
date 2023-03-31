import Header from 'container/Header/Header'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { Container, Grid, StyledEngineProvider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import CartPage from 'pages/Cart/CartPage'
import CheckoutPage from 'pages/Checkout/CheckoutPage'
import AddNewProduct from 'pages/AddNewProduct/AddNewProduct'
import { useAppDispatch } from 'redux/hooks'
import { useEffect, useState } from 'react'
import { fetchProducts } from 'redux/productsreducer'
import ProductsListItem from 'components/ProductsList/ProductsListItem'

type Props = {}

const App = (props: Props) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    })

    const [query, setQuery] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

    const [catchProducts, setCatchProducts] = useState<any>()

    const handleSearch = () => {
        fetch(`https://dummyjson.com/products/search?q=${query}`)
            .then((res) => res.json())
            .then((data) => setCatchProducts(data.products))
            .catch((error) => console.log(error))
    }
    console.log(catchProducts)

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header
                query={query}
                handleInputChange={handleInputChange}
                handleSearch={handleSearch}
            />
            <Container
                sx={{
                    padding: '60px 0',
                }}
            >
                {catchProducts === undefined ? (
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="cart" element={<CartPage />} />
                        <Route path="checkout" element={<CheckoutPage />} />
                        <Route
                            path="addNewProduct"
                            element={<AddNewProduct />}
                        />
                    </Routes>
                ) : (
                    catchProducts && (
                        <Grid container spacing={12}>
                            {catchProducts.map((product: any) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    key={product.id}
                                >
                                    <ProductsListItem
                                        id={product.id}
                                        title={product.title}
                                        description={product.description}
                                        price={product.price}
                                        image={product.image}
                                        category={product.category}
                                        stock={product.stock}
                                        rating={product.rating}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )
                )}
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
