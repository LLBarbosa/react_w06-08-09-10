import './ContactCard.css';

export const ContactCard = () => {
    return (

        <>
            <div className="container text-white">
                <section className=''>
                    <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.880021206733!2d-118.35463642375316!3d34.09821391530064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bedea72814df%3A0x6fc5ebe5378635cb!2sGuitar%20Center!5e0!3m2!1spt-BR!2sbr!4v1688747091799!5m2!1spt-BR!2sbr" width="1300" height="300"></iframe>
                </section>
                <div className="container d-flex justify-content-between my-5">
                    <div className="location">
                        <h3 className='matriz-title'>Matriz:</h3>
                            <p className="matriz-location">Rua: Minha Rua, 0 - Seu Bairro</p>
                            <p className="matriz-location">Florianópolis - SC</p>
                        </div>
                        <div className="contact">
                            <a className="contact" href="mailto:guitarstorexyz.com">contato@guitarstorexyz.com</a><br></br>
                            <a className="contact" href="tel:+554899999999">+55 48 99999-9999</a>
                        </div>
                        


                    </div>
                    <div className="opening-hours">
                            <p><small className=''>Aberto de segunda a sabádo das 09:00h às 18:00h</small></p>

                        </div>



                </div>
           

        </>

    )

}




