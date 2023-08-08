import { useEffect, useContext } from "react";
import { BannerContext } from "../../contexts/BannerContext";
import { Header } from "../../components/Header/Header";
import { Banner } from "../../components/Banner/Banner";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Footer } from "../../components/Footer/Footer";

export const ProductPage = () => {
    const { setBanner } = useContext(BannerContext)
    useEffect(() => {
        setBanner({
            title: "Sons que encantam",
            subtitle: "Guitarras arrasadoras",
        })
    }, [])

    return (

        <>
            <Header />
            <Banner />
            <ProductCard nome="Gibson" valor={35000} descricao={"dfdfdfdffdfdd"} id={1} caracteristicas={["Corpo em mahogany (mogno);", "Braço em ébano;", "2 captadores Humbuckers DiMarzio.",]} />
            <ProductCard nome="Gibson" valor={35000} descricao={"dfdfdfdffdfdd"} id={1} caracteristicas={["Corpo em mahogany (mogno);", "Braço em ébano;", "2 captadores Humbuckers DiMarzio."]} />
            <Footer />

        </>




    )
};

