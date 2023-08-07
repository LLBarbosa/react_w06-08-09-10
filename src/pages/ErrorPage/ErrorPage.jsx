import { Link } from 'react-router-dom';
import './ErrorPage.css';


export const ErrorPage = () => {
  return (
    <>
      <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 className="display-1 fw-bold text-primary">404</h1>
                <p className="fs-3 text-white"> <span className="text-danger">Opps!</span> Página não encontrada!!.</p>
                <p className="lead text-white">
                    A página que você procura não existe.
                  </p>
                <button className='btn btn-primary' ><Link className='button-home' to={"/index"}>Home</Link></button>
            </div>
        </div>




        

    </>



  )
};

