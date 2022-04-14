import './styles.scss';

export function Search({search, total}) {
    return(
        <div className="search">
            <div className="search-results">
                {total} countries found
            </div>
            <form className="search-form">
                <input 
                    placeholder="search"
                    type="text"
                    onChange={search}
                />
            </form>
        </div>
    )
}