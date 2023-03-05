


export default function CardCountry({name,img, continent}){


    return(<div className="bgCountry">
        <h2>{name}</h2>
        <img src={img} alt={name} />
        <div>
            <span>Continente:</span><p>{continent}</p>
        </div>
    </div>)
}