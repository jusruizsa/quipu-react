import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            remitente: '',
            destinatario: '',
            valor: '',
            concepto: ''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        alert('A form was submitted: ' + this.state);

        fetch('http://localhost:5000/new', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state)
        }).then(function (response) {
            console.log(response)
            return response.json();
        });

        event.preventDefault();
    }

    render() {
        return (
            <Container style={{width: '66.6vh'}}>
            <div className="row text-center">
              <h1>Documento de presupuesto</h1>
            </div>
    
            <Form onSubmit={this.handleSubmit} className="mt-5" style={{border: 'solid',
                                          padding: '20px'}}>
              <Row className="mt-5">
                <Col>
                  <Form.Label style={{'font-weight': 'bold'}}>Nombre empresa de origen</Form.Label>
                  <Form.Control type='text' disabled />
                </Col>
                <Col>
                  <Form.Label style={{'font-weight': 'bold'}}>Nombre de empresa destino</Form.Label>
                  <Form.Control type="text" disabled />
                </Col>
              </Row>
    
              <Row className="mt-5">
                <Col>
                  <Form.Label style={{'font-weight': 'bold'}}>Cuenta de origen</Form.Label>
                  <Form.Select value={this.state.value} name="remitente" defaultValue="Seleccione...">
                    <option>Seleccione...</option>
                    <option>Cuenta 1</option>
                    <option>Cuenta 2</option>
                  </Form.Select>
                </Col>
    
                <Col>
                  <Form.Label style={{'font-weight': 'bold'}}>Cuenta de destino</Form.Label>
                  <Form.Select value={this.state.value} name="destinatario" defaultValue="Seleccione...">
                    <option>Seleccione...</option>
                    <option>Cuenta 1</option>
                    <option>Cuenta 2</option>
                  </Form.Select>
                </Col>
              </Row>
    
              <Row className="mt-5">
                <Col>
                  <Form.Label style={{'font-weight': 'bold'}}>Valor</Form.Label>
                  <Form.Control value={this.state.value} name="valor" type='number' />
                </Col>
              </Row>
    
              <Row className="mt-5">
                <Col>
                  <Form.Label style={{'font-weight': 'bold'}}>Concepto</Form.Label>
                  <Form.Control value={this.state.value} name="concepto" as="textarea"
                    style={{ height: '200px' }} />
                </Col>
              </Row>
    
              <Button className="mt-5" variant="primary" type="submit">Enviar</Button>
    
    
            </Form>
    
    
          </Container>
        );
    }
}

export default MyForm;