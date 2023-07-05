import { useState } from "react";

function ContactForm () {

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
        <div className="card-container">
        <h2>Deixe o seu recado.</h2>
        <form>
            <label htmlFor="nome">Nome</label>
            <input type="text" placeholder="Digite seu nome..." onInput={handleInput}></input>
            <label htmlFor="telefone">Telefone</label>
            <input type="number" placeholder="Digite seu telefone..." onInput={handleInput}></input>
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="Digite seu e-mail..." onInput={handleInput}></input>
            <label htmlFor="mensagem">Mensagem</label>
            <textarea className="textarea" placeholder="Digite sua mensagem..." onSubmit={handleSubmit}></textarea>
            <small>0 de 500 caracteres.</small>
            <button type="submit">Enviar</button>
       
        </form>
        </div>
        </>
    )
};

export default ContactForm;







