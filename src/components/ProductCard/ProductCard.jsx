import './ProductCard.css';
import logoGuitarGibson from '../../_assets/images/logoGuitarGibson.jpg';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';


export const ProductCard = (props) => {
  return (
    <div className='card-principal'>
      <div className='card-image'>
        <figure>
          <img src={logoGuitarGibson} width="100%" alt="Guitarra Gibson Les Paul" />
        </figure>



      </div>

      <div className='card-description'>
        <div className='card-description-info'>
          <h4><b>{props.nome} COD:{props.id}</b></h4>
          <p>Descricão: {props.descricao}</p>
          <div className='card-description-topics'>

            <p>Características:</p>
            <div className='icon'>
              <p><FaStar />{props.caracteristicas[0]}</p>
              <p><FaStar />{props.caracteristicas[1]}</p>
              <p><FaStar />{props.caracteristicas[2]}</p>
              <h3>R${props.valor},00 <span><button className='button-info'>SAIBA MAIS...</button></span></h3>
            


            </div>

           
          </div>

          

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




