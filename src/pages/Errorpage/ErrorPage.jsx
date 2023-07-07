import { Link } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
  return (
    <>
      <body className='container-fluid flex text-center'>
        <div className='container-fluid flex center'>
          <div className='container-fluid text-center'>
            <h1 className='h1 text-primary'>Nada por aqui...</h1>
            <h2 className='h2 text-primary'>Vá para</h2>
            <Link to={"/"} ><span className='h1 bg-white'>Home</span></Link>
          </div>



        </div>
      </body>








    </>



  )
};

export default ErrorPage;