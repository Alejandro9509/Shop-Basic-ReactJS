
import { Provider, connect } from 'react-redux'
import React, { useState } from 'react'
import { Modal , Button, InputGroup,  FormControl} from 'react-bootstrap'
import {store, mapDispatchToProps, mapStateToProps} from '../redux/productRedux'

function ModalView(props) {

    const [show, setShow] = useState(false);
    const [prod, setProduct] = useState("");
    const [price, setPrice] = useState(0); 
    const divField = React.useRef(null); 

 
    const handleProd = (event) => {
        setProduct(event.target.value)
    } ; 
    const handlePrice = (event) => {
        setPrice(event.target.value)
    }
    const handleSubmit = () => {
     if(Number(price)) {
                        props.submit.submitNewProduct([prod, price]);
                        setShow(false); 
                        }else divField.current.className = 'alert alert-danger'
    }
    return (
      <div>
        <Button variant="primary" onClick={ () => setShow(true)}>
          Añadir producto
        </Button>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Añadir producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <InputGroup className="mb-3">        
            <FormControl onChange={ handleProd.bind(this) } id="product-name" aria-describedby="basic-addon3" />
          </InputGroup>
          <div ref={divField} className='d-none'>Verifica que sea un valor numerico</div>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl onChange={ handlePrice.bind(this) } id="product-price" aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Añadir
            </Button>

          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  

class AppProcessing extends React.Component {
    constructor(props) {
        super(props)
        
    }
     
    render() {
        return(
            <>
            <section>
                <div className='box-principal' > 
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



