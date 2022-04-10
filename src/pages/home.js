
import { Provider, connect } from 'react-redux'
import React from 'react'
import {Card, ListGroup } from 'react-bootstrap'
import {store, mapDispatchToProps, mapStateToProps} from '../redux/productRedux'

class AppProcessing extends React.Component {
    constructor(props) {
        super(props)
        this.subProd = this.subProd.bind(this)       
    }
    
    subProd() {
        this.props.submitNewProduct("Hola mundo")
    }
    render() {
        return(
            <section>
                <div>
                    <button onClick={this.subProd}>Presioname</button>
                    <div>{this.props.products}</div>
                </div>
            </section>
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



