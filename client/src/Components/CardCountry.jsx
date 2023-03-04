


export default function CardCountry(props){

    const {name, capital ,img, subregion} = props;

    return(<div className="bgCountry">
        <h2>{name}</h2>
        <img src={img} alt={name} />
        <div>
            <span>Capital:</span><p>{capital}</p>
            <span>Región:</span><p>{subregion}</p>
        </div>
    </div>)
}