import { Typography, Grid } from '@mui/material'
import ProductsListItem from 'components/ProductsList/ProductsListItem'
import { useAppSelector } from 'redux/hooks'

const ProductsList = () => {
    const productsArray = useAppSelector((state) => state.products)
    console.log(productsArray)

    return (
        <>
            <Typography
                variant="h4"
                align="center"
                component="h2"
                sx={{
                    marginBottom: '40px',
                }}
            >
                Announcements
            </Typography>

            <Grid container spacing={12}>
                {productsArray.map(
                    ({
                        id,
                        title,
                        description,
                        price,
                        image,
                        category,
                        stock,
                        rating,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                id={id}
                                title={title}
                                description={description}
                                price={price}
                                image={image}
                                category={category}
                                stock={stock}
                                rating={rating}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
