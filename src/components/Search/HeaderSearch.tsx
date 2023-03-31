import './HeaderSearch.scss'

type Props = {
    query: string
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSearch: () => void
}
const HeaderSearch = ({ query, handleInputChange, handleSearch }: Props) => {
    return (
        <>
            <div className="search-container">
                <input
                    className="search-input"
                    type="text"
                    value={query}
                    onKeyUp={handleSearch}
                    onChange={handleInputChange}
                    placeholder="Search product "
                />
            </div>{' '}
        </>
    )
}
export default HeaderSearch
