import './ProductCard.css';
import { Button } from '../Button/Button';
import logoGuitarGibson from '../../_assets/images/logoGuitarGibson.jpg';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';


export const ProductCard = (props) => {
  return (
    <div className='card-principal'>
      <div className='card-image'>
        <figure>
        <img src={logoGuitarGibson} width="100%" alt="Guitarra Gibson Les Paul"/>
        </figure>



      </div>

      <div className='card-description'>
        <div className='card-description-info'>
          <h3 className='title-product'>GUITARRA</h3>
          <p>{props.nome} [cod. {props.id}]</p>
          <p>Descricão: {props.descricao}</p>
          <div className='card-description-topics'>
          
          <ul class='icon'><p>Características:</p>
            <li><FaStar class='icon'  />{props.caracteristicas[0]}</li>
            <li><FaStar class='icon'  />{props.caracteristicas[1]}</li>
            <li><FaStar class='icon'  />{props.caracteristicas[2]}</li>
            <li><FaStar class='icon'  />{props.caracteristicas[3]}</li>
            
          </ul>
          </div>
                    <p>Valor R$: {props.valor}</p>
            
          
          <Button/>
         
        </div>
      
      </div>
     
    </div>
       
  )
};

ProductCard.propTypes = {
  nome: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired,
  descricao: PropTypes.string.isRequired,
  caracteristicas: PropTypes.array,
  id: PropTypes.number.isRequired,
}




