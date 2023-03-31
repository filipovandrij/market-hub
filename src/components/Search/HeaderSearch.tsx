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
                <button className="search-button" onClick={handleSearch}>
                    Search
                </button>
            </div>{' '}
        </>
    )
}
export default HeaderSearch
