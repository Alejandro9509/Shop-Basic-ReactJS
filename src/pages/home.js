
import { Provider, connect } from 'react-redux'
import React, { useState } from 'react'
import {Card, ListGroup, Modal , Button, InputGroup, FormControl} from 'react-bootstrap'
import {store, mapDispatchToProps, mapStateToProps} from '../redux/productRedux'

function ModalView(props) {

    const [show, setShow] = useState(false);
    const [prod, setProduct] = useState("");
    const [price, setPrice] = useState(0); 
 
  
    const handleClose = () => {
        
        setShow(false)
    };
    const handleShow = () => setShow(true);
    const handleProd = (event) => {
        
    } ; 
    const handlePrice = (event) => {

    }
    const handleSubmit = () => {
        props.submit.submitNewProduct([prod, price])
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Añadir producto
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Añadir producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <InputGroup className="mb-3">        
            <FormControl onChange={ handleProd.bind(this) } id="product-name" aria-describedby="basic-addon3" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl onChange={ handlePrice.bind(this) } id="product-price" aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Añadir
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

class AppProcessing extends React.Component {
    constructor(props) {
        super(props)
        this.subProd = this.subProd.bind(this)
    }
    subProd() {
        
    }
    render() {
        return(
            <>
            <section>
                <div>
                    <ModalView submit={this.props} />
                    <div>{this.props.products}</div>
                </div>
            </section>
            </>
        )
    }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(AppProcessing)

export class Home extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Container></Container>
      </Provider>
    )
  }
} 



