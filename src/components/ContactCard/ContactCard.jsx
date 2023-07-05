import { useState } from "react";
function ContactCard () {

    const [data, setData]= useState({
        nome: '',
        telefone: '',
        email: '',
        mensagem: '',
    })
    const handleInput = (event) => {
        event.preventDefault();
        const { value, id } = event.target;

        const data = {... formData, [id]: value};
        setFormData(data);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);

        isFormValid()
        ? alert(`Olá, ${formData.nome}! Sua mensagem foi enviada com sucesso!! Entraremos em contato em até dois dias úteis. Obrigado!!`)
        : alert('Verifique os campos digitados')
    }

    const isFormValid = () => {
        let validate = true;

        const data = Object.entries(formData);
       
        for(const [key] of data) {
            if(!formData[key].length) {
                validate = false;
        }
    }

        return validate;
    }





    return (

        <>

            <h2>Entre em contato conosco</h2>
            <h3>Contato.</h3>
            <div className="card-container">
                <form>
                    <span>Deixe o seu reacado</span>
                    <label>Nome</label>
                    <input type='text' placeholder="Digite seu nome..." onInput={handleInput} required></input>
                    <label>Telefone</label>
                    <input type='number' placeholder="Digite seu telefone..." onInput={handleInput} required></input>
                    <label>E-mail</label>
                    <input type='email' placeholder="Digite seu e-mail..." onInput={handleInput} required></input>
                    <label>Mensagem</label>
                    <input type='checkbox' placeholder="Digite sua mensagem..."></input>
                    <button type="submit" onSubmit={handleSubmit}>Enviar</button>
                </form>

            </div>
            <h2>Venha conhecer nossa casa.</h2>
            <div className="card-map">


            </div>





        </>



    )
};

export default ContactCard;