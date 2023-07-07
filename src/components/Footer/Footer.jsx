import './Footer.css';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';



function Footer () {
    return (
        <footer className='footer-wrapper fluid-container'>
            <div className='container-footer container'>
                <div className='footer-01'>
                    <p>Guitar Store</p>
                    <ul class='icons'><h4>Nossas redes</h4>
                        <li><a href='/'><BsFacebook class='icons' /></a></li>
                        <li><a href='/'><BsInstagram class='icons' /></a></li>
                        <li><a href='/'><BsYoutube class='icons' /></a></li>
                    </ul>
                                                         
                </div>
                <div className='footer-02'>
                    <p className='footer-title'>CONTATO</p>
                    <p>+ 55 48 99999-9999</p>
                    <p>contato@guitarstore.com</p>
                    <hr></hr>
                    <p>Rua Minha Rua, 00 - Seu Bairro</p>
                    <p>Florianópolis - SC</p>
                    <hr></hr>
                </div>
                <div className='footer-03'>
                    <ul>
                        <p className='footer-title'>INFORMAÇÕES</p>
                        <li><Link to={'/produtos'}>Produtos</Link></li>
                        <li><Link to={'/contato'}>Contato</Link></li>
                        <li><Link to={'/'}>Termos e Condições</Link></li>
                       
                    </ul>
                </div>
            </div>
            <div className='footer-final container'>
                <p>Guitar Store - Todos os direitos reservados - 2023</p>
            </div>
        </footer>
    )
}

export default Footer;


