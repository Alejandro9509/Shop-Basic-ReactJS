
import { Provider, connect } from 'react-redux'
import React, { useState } from 'react'
import {Card, ListGroup, Modal , Button} from 'react-bootstrap'
import {store, mapDispatchToProps, mapStateToProps} from '../redux/productRedux'

function ModalView() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Añadir producto
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
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
    
    handleClose = () => {
        this.setShow(false)
    }

    handleShow = () => {
        this.setShow(true)
    }
    
    subProd() {
        this.props.submitNewProduct("Hola mundo")
    }
    render() {
        return(
            <>
            <section>
                <div>
                    <ModalView />
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



