import './Header.css';
import logoGuitar from '../../_assets/images/logoGuitar.jpg';
import { Link } from 'react-router-dom';

export const Header = () => {

    return (
        <>
            <div className='container-fluid' id='header'>
                <nav className='container'>
                    <div className='logo'>
                        <span><img src={logoGuitar} /></span>
                    </div>
                    <ul>
                        <li><Link to={'/produtos'}>Produtos</Link></li>
                        <li><Link to={''}>Serviços</Link></li>
                        <li><Link to={'/contato'}>Contato</Link></li>
                    </ul>
                </nav>
            </div>
            <hr></hr>
            
        </>



    )

};





