
import { Provider, connect } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { Modal , Button, InputGroup,  FormControl, Table} from 'react-bootstrap'
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
        console.log()
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

function ModalViewCobrar(props){
  const [cobrar, setCobrar] = useState(false)
  const handleCobrar = () => {
      props.cobrar.clear()
  }
  return(
    <>
      <Button onClick={() => setCobrar(true)}>Cobrar</Button>
      <Modal show={cobrar} onHide={() => setCobrar(false)}>
          <Modal.Header>
            <Modal.Title>Cobrar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Es un total de: {props.cobrar.products.reduce((counter, item) => { return counter+= Number(item[1]) }, 0)}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleCobrar}>Cobrar</Button>
          </Modal.Footer>
      </Modal>
    </>
  )
}



class AppProcessing extends React.Component {
    constructor(props) {
        super(props)
        this.handleDel = this.handleDelete.bind(this)
    }



    removeProd(index){
      console.log(index)
      
    }
    handleDelete = (event) => {
      this.props.removeAProduct(event.target.id)
    }
    render() {
        return(
            <>
            <section>
                <div className='box-principal' > 
                    <div>
                        <ModalView submit={this.props} />
                    </div>
                    <div>
                    <Table striped bordered>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Nombre del producto</th>
                          <th>Precio del producto</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                        this.props.products.map((item , index) => {
                          return(
                            <tr>
                              <td>{index + 1}</td>
                              <td>{item[0]}</td>
                              <td>{item[1]}</td>
                              <td><Button id={index} onClick={this.handleDel}>Remover</Button></td>
                            </tr>
                          )
                        })
                      }
                      </tbody>
                    </Table>
                    </div>
                    <div>
                      {this.props.products.length > 0 &&
                        <ModalViewCobrar cobrar={this.props}/>
                      }
                    </div>
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



