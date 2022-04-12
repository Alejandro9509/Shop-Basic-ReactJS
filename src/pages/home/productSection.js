import React, { useState} from 'react'
import { Modal , Button, InputGroup,  FormControl, Table} from 'react-bootstrap'

export function AddProduct(props) {

    const [show, setShow] = useState(false);
    const [prod, setProduct] = useState("");
    const [price, setPrice] = useState(0);
    const divPrecio = React.useRef(null);
    const divProducto = React.useRef(null);

    const handleProd = (event) => {
        setProduct(event.target.value)
    } ;
    const handlePrice = (event) => {
        setPrice(event.target.value)
    }
    const handleSubmit = () => {
        if(props.submit.products.filter((item) => item[0] == prod).length > 0){
          divProducto.current.className = 'alert alert-danger'
        }else{
          if(Number(price)) {
                          props.submit.submitNewProduct([prod, price]);
                          setShow(false);
                        }else divPrecio.current.className = 'alert alert-danger'
        }
    }
    return (
        <>
        <Button className='col-sm m-2' variant="primary" onClick={ () => setShow(true)}>
          Añadir producto
        </Button>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Añadir producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div ref={divProducto} className='d-none'>Ya se encuentra este producto</div>
          <InputGroup className="mb-3">
            <FormControl onChange={ handleProd.bind(this) } id="product-name" aria-describedby="basic-addon3" />
          </InputGroup>
          <div ref={divPrecio} className='d-none'>Verifica que sea un valor numerico</div>
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
      </>
    );
}
