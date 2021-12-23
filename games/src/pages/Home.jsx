import { Link } from "react-router-dom";


const Home =()=>{
    return(
        <div className="buttons">
            <Link to={`/app`}>
                <p>Entrar a App</p>
              </Link>
              <Link to={`/gifgenerator`}>
            <p>Entrar a GifGenerator</p>
          </Link>
          <Link to={`/paint`}>
            <p>Entrar a Paint</p>
          </Link>
        </div>

    )
};

export default Home;