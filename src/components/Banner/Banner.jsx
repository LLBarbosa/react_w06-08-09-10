import './Banner.css';
import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { BannerContext } from '../../contexts/BannerContext';


export const Banner = ( ) => {

    const { banner } = useContext(BannerContext)
 
    return (
        <div className="banner container">
            <p className='text-banner'>{banner.text1}</p>
            <p className='text-banner'>{banner.text2}</p>
            <p><strong>estão aqui.</strong></p>
        </div>
    )
}

// // Banner.propTypes = {
// //     text1: PropTypes.string.isRequired,
// //     text2: PropTypes.string.isRequired,


// };







