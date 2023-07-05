import './Header.css';
import logo from '../../_assets/images/logo.png';
import { Link } from 'react-router-dom';

 function Header () {

    return (
        <div className='fluid-container'>
            <nav className='container'>
                <div className='logo'>
                <span><img src={logo}/></span>
               </div>
               <ul>
                <li><Link to={'/produtos'}>Guitarras</Link></li>
                <li><Link to={'/servicos'}>Serviços</Link></li>
                <li><Link to={'/contato'}>Contato</Link></li>
               </ul>
            </nav>
          </div>
    
    ) 
    
};

export default Header;




