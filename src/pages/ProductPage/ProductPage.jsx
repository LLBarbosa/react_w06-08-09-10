import { Header } from "../../components/Header/Header";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Footer } from "../../components/Footer/Footer"

export const ProductPage = () => {
    return (

        <>
           <Header/>
           <ProductCard nome="Gibson" valor={35000} descricao={"dfdfdfdffdfdd"} id={1} caracteristicas={["Corpo em mahogany (mogno);", "Braço em ébano;", "2 captadores Humbuckers DiMarzio;", "Tarrachas Gotoh vintage."]} />
           <ProductCard nome="Gibson" valor={35000} descricao={"dfdfdfdffdfdd"} id={1} caracteristicas={["Corpo em mahogany (mogno);", "Braço em ébano;", "2 captadores Humbuckers DiMarzio;", "Tarrachas Gotoh vintage."]} />
           <Footer/>
        
        </>




    )
};

