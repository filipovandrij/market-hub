import AsyncSelect from 'react-select/async'
import './Search.scss'
import { useAppSelector } from 'redux/hooks'

const MySelect = () => {
    const productsArray = useAppSelector((state) => state.products)

    const handleChange = (selectedOption: any) => {
        console.log('handleChange', selectedOption)
    }

    const loadOptions = (searchvalue: any, callback: any) => {
        setTimeout(() => {
            const filterArray = productsArray.filter((option) =>
                option.title.toLowerCase().includes(searchvalue.toLowerCase())
            )
            callback(filterArray)
        }, 1000)
    }

    return (
        <div className="main-search">
            <AsyncSelect
                loadOptions={loadOptions}
                options={productsArray}
                onChange={handleChange}
            />
        </div>
    )
}

export default MySelect
