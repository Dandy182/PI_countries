
import { Link } from "react-router-dom"


export default function Start(){

  return(<div className="bkg_start">
    <div className="titulo_inicial">
      <h1>Bienvenidos</h1>
        <h1>Henry Countries</h1>
    </div>
    <Link to = '/home'>
      <button>Ingresar</button>
    </Link>
  </div>)
}