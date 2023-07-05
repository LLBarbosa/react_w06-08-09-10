import { Link } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage () {
    return (
    <>
    <div className='container-page'>
      <h1 className='text-error'>Nada por aqui...</h1>
      <h2 className='text-direction'>Vá para</h2>
      <Link className='link-home' to={'/'}>Home</Link>
      </div>
    
    
    
    </>



    )
};

export default ErrorPage;