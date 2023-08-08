import { Header } from "../../components/Header/Header";
import { Banner } from "../../components/Banner/Banner";
import { ContactForm}  from "../../components/ContactForm/ContactForm";
import { ContactCard }from "../../components/ContactCard/ContactCard";
import { Footer } from "../../components/Footer/Footer";
import { useContext, useEffect } from "react";
import { BannerContext } from "../../contexts/BannerContext";

export const ContactPage = () => {
    const {setBanner} = useContext(BannerContext)
    useEffect(() => {
        setBanner({
            title: "Fale conosco",
            subtitle: "Deixe o seu recado"
        })
    }, [])

    return (
        <>
            <Header />
            <Banner />
            <ContactForm />
            <ContactCard />
            <Footer />
        </>

    )
};

