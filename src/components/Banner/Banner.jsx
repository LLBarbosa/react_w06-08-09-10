import './Banner.css';
import React, { useContext } from 'react';
import { BannerContext } from '../../contexts/BannerContext';


export const Banner = ( ) => {

    const { banner } = useContext(BannerContext)
 
    return (
        <div className="banner container">
            <p className='text-banner'>{banner.title}</p>
            <p className='text-banner'><strong>{banner.subtitle}<span className='point-decoration'>:</span></strong></p>
        </div>
    )
}







