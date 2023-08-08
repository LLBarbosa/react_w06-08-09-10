import { createContext, useState } from 'react';
import PropTypes from "prop-types";

export const BannerContext = createContext({
    banner: {
        title: '',
        subtitle: '',
    },
    setBanner: () => {},
});

export function BannerProvider ({ children }) {
    const [banner, setBanner] = useState({
        title: 'Os melhores instrumentos',
        subtitle: 'Os melhores sons',
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