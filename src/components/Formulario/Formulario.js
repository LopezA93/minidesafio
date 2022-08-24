import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = () => {
    const [formData, setFormData] = useState(
        {
            name: "",
            phone: "",
            email: "",
        }
    )
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }
    const formSubmit = (e) => {
        e.preventDefault()
        
           
            console.log(formData)
        
    }

    return (
        <div className='container'>
        <h2>Formulario</h2>
        <Form onSubmit={formSubmit} className="container">
                
                                <Form.Control type="text" name="name" required placeholder="Nombre completo" onChange={handleChange}
                                    value={formData.name} />
                                <Form.Control type="number" name="phone" required placeholder="Telefono" onChange={handleChange}
                                    value={formData.phone} />
                                <Form.Control type="mail" id="email" name="email" required placeholder="Correo electrónico" onChange={handleChange} value={formData.email} />
                               
                                
                                <Button type="submit" >Enviar</Button>
                            </Form>
        </div>
    
    );
}

export default Formulario;