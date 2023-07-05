import './Header.css';
import logoGuitar from '../../_assets/images/logoGuitar.jpg';
import { Link } from 'react-router-dom';

 function Header () {

    return (
        <div className='fluid-container'>
            <nav className='container'>
                <div className='logo'>
                <span><img src={logoGuitar}/></span>
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




