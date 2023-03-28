import AsyncSelect from 'react-select/async'
import { useAppSelector } from 'redux/hooks'

const MySelect = () => {
    const productsArray = useAppSelector((state) => state.products)

    const options = [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'cherry', label: 'Cherry' },
    ]

    const handleChange = (selectedOption: any) => {
        console.log('handleChange', selectedOption)
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
            console.log('loadOptions', searchvalue, filterArray)
            callback(filterArray)
        }, 1000)
    }

    return (
        <div className="main-search">
            <AsyncSelect
                loadOptions={loadOptions}
                options={options}
                onChange={handleChange}
            />
        </div>
    )
}

export default MySelect
