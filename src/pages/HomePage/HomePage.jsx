import { useEffect, useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Banner } from "../../components/Banner/Banner";
import { Footer } from "../../components/Footer/Footer";
import { BannerContext } from "../../contexts/BannerContext";

export const HomePage = () => {
  const {setBanner} = useContext(BannerContext)
  useEffect(() => {
      setBanner({
          title: "Os melhores sons",
          subtitle: "Os melhores instrumentos",
      })
  }, [])
    return (
        <>
          <Header />
          <Banner/>
          <Footer />
        </>
    )
}

