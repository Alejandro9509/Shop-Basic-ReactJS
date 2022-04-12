
import { Provider, connect } from 'react-redux'
import React, { useState} from 'react'
import { Modal , Button, InputGroup,  FormControl, Table} from 'react-bootstrap'
import {store, mapDispatchToProps, mapStateToProps} from '../../redux/productRedux'
import {AddProduct} from './productSection'
import {AddMoney} from './moneySection'

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
function TableProducts(props){
  function handleDelete(event){
    props.show.removeAProduct(event.target.id)
  }
  return (
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
        props.show.products.map((item , index) => {
          return(
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td><Button id={index} onClick={handleDelete}>Remover</Button></td>
            </tr>
          )
        })
      }
      </tbody>
    </Table>
  )
}
class AppProcessing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          submenu: true
        }
    }
    render() {
        return(
            <>
            <section>
                <div className='box-principal' >
                    <div className='row'>
                      {this.state.submenu ?
                        <AddProduct  submit={this.props} /> :
                        <AddMoney  money={this.props} />
                      }

                      {this.state.submenu ?
                        <Button className='col-sm m-2' onClick={() => this.setState({ submenu: false }) }>Monedas</Button> :
                        <Button className='col-sm m-2' onClick={() => this.setState({ submenu: true })}>Caja</Button>
                      }
                    </div>
                    <div>
                      {this.state.submenu ?
                      <TableProducts show={this.props} />:
                      <div>Dinero</div>
                      }
                    </div>
                    <div>
                      {
                        this.props.products.length > 0 && this.state.submenu &&
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
