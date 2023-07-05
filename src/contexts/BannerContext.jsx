import { createContext, useState } from 'react';
import PropTypes from "prop-types";

export const BannerContext = createContext({
    banner: {
        text1: '',
        text2: '',
    },
    setBanner: () => {},
});

export function BannerProvider ({ children }) {
    const [banner, setBanner] = useState({
        text1: 'os melhores instrumentos',
        text2: 'os melhores sons.',
    });

   
    return(
        <BannerContext.Provider value={{banner, setBanner}}>
         { children }
        </BannerContext.Provider>
    )
};

    BannerProvider.propTypes = {
       children: PropTypes.node,
 };    