import Table from 'react-bootstrap/Table';
// const db = "./db.json"
import db from './db.json'

const Tabla = () => {
    return (
    <Table striped="columns"  className='table-dark' >
        <thead>
            <tr >
                <th>Nombre</th>
                <th>Edad</th>
                <th>Carrera</th>
                <th>Hoobie</th>
            </tr>
        </thead>
        <tbody> 
            {
                db.map((persona) => {
                    const { nombre, edad, carrera, hobbie } = persona

                    return (
                        
                        <tr key={edad}>
                            <td>{nombre}</td>
                            <td>{edad}</td>
                            <td>{carrera}</td>
                            <td>{hobbie}</td>
                        </tr>
                        
                    )
                })
            }

            
        </tbody>
    </Table>
    )
}

export default Tabla