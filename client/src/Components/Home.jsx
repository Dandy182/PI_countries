import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Home(){


    return(<div className="home">
        <div className="home__encabezado">
         <h1>Countries</h1>
         <nav className="navegacion">
            <Link to='/Activity'>
                Nueva Actividad
            </Link>
         </nav>
         <SearchBar />
        </div>

        <div className="cotenedor conutye" >

        </div>

    </div>)
    
}