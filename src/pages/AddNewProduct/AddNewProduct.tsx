import { useState } from 'react'

type Props = {}
const AddNewProduct = (props: Props) => {
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
        <>
            <div>
                <input
                    type="text"
                    value={query}
                    onKeyUp={handleSearch}
                    onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                {catchProducts &&
                    catchProducts.map((product: any) => (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <img src={product.image} alt={product.name} />
                            <div>{product.category}</div>
                        </div>
                    ))}
            </div>
        </>
    )
}
export default AddNewProduct
