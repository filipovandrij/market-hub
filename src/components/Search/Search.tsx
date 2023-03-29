import { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async'
import axios from 'axios'

const MySelect = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then((response) => {
                setProducts(response.data.products)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleChange = (selectedOption: any) => {
        console.log(selectedOption)
    }

    const loadOptions = (searchvalue: any, callback: any) => {
        setTimeout(() => {
            const filterArray = products.filter((product: any) =>
                product.title.toLowerCase().includes(searchvalue.toLowerCase())
            )

            callback(filterArray)
        }, 1000)
    }

    return (
        <AsyncSelect
            loadOptions={loadOptions}
            defaultOptions
            onChange={handleChange}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option.id}
        />
    )
}

export default MySelect
