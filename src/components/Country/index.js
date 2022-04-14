import { Link } from 'react-router-dom';
import './styles.scss';
export function Country({ cca3, flag, name, capitals, population, area}) {

    return(
        <Link to={`country/${cca3}`}>
        <article className="country">
            <div 
                className="country-flag"
                style={{
                    backgroundImage: `url(${flag})`                
                }}
            >
            </div>
            <div className="country-name">
                {name}
            </div>
            <div className="country-capital">
                {capitals && capitals.map( capital => capital).join(', ')}
            </div>
            <div className="country-population">
                {population}
            </div>
            <div className="country-area">
                {area}
            </div>
        </article>
        </Link>
    )
}