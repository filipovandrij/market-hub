import AsyncSelect from 'react-select/async'
import './Search.scss'
import { useAppSelector } from 'redux/hooks'

const MySelect = () => {
    const productsArray = useAppSelector((state) => state.products)

    const handleChange = (selectedOption: any) => {
        return selectedOption.title
    }

    const loadOptions = (searchvalue: any, callback: any) => {
        setTimeout(() => {
            const filterArray = productsArray.filter(
                (option) =>
                    option.title
                        .toLowerCase()
                        .includes(searchvalue.toLowerCase()) ||
                    option.category
                        .toLowerCase()
                        .includes(searchvalue.toLowerCase())
            )

            callback(filterArray)
        }, 2000)
    }

    return (
        <div className="main-search">
            <AsyncSelect
                cacheOptions
                defaultOptions
                loadOptions={loadOptions}
                onChange={handleChange}
            />
        </div>
    )
}

export default MySelect
