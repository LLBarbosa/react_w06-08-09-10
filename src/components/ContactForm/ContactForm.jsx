
import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {

    const  [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        mensagem: '',
    })

    const handleInput = (e) => {
        e.preventDefault();
        const { value, id } = e.target;

        const data = {... formData, [id]: value};
        setFormData(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        isFormValid()
        ? alert(`Olá, ${formData.nome}! Sua mensagem foi enviada!! Em até 48 horas entraremos em contato com você. Obrigado!!`)
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
        <div className='container'>

            <section className="contato-formulario" aria-label="Formulário">
              <h2 className='text-contact'>Deixe o seu recado<span className='point-decoration'>:</span></h2>
               <div className='container border border-primary my-5'>
                <form className=""  onSubmit={handleSubmit}>
                    <div className="row">
                    <div className="my-3 col">
                        <label className='form-label' htmlFor="nome">Nome</label>
                        <input className='form-control' type="text" id="nome" name="nome" placeholder="Seu nome..." onInput={handleInput}/>
                    
                    </div>
                    
                    <div className="my-3 col">
                        <label className='form-label' htmlFor="telefone">Telefone</label>
                        <input className='form-control' type="number" id="telefone" name="telefone" placeholder="Seu telefone..." onInput={handleInput}/>
                    </div>
                    </div>

                </form>

                <form className="" action="./contato.html" onSubmit={handleSubmit}>
     
                    <div className="my-3">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input className='form-control'  type="email" id="email" name="email" placeholder="Seu email..." onInput={handleInput}/>
                    </div>

                    <div className="my-3">
                        <label  className='form-label' htmlFor="mensagem">Mensagem</label>
                        <textarea className="form-control"  id="mensagem" name="mensagem" placeholder="Digite a sua mensagem..." onInput={handleInput}></textarea>
                    </div>

                    <button className="btn btn-primary button">Enviar Mensagem</button>

                </form>
                </div>
            </section>

        </div>

    )
}

export default ContactForm;