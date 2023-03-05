
import { Link } from "react-router-dom"


export default function Start(){

  return(<div className="landing">
    <div className="titulo_inicial">
      <h1>Bienvenidos</h1>
      <h1>Henry Countries</h1>
    <Link to = "/home" >
      <div className="btn">Ingresar</div>
    </Link>
    </div>
  </div>)
}