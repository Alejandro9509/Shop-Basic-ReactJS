
import { Provider, connect } from 'react-redux'
import React from 'react'
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
            <>
                <button onClick={this.subProd}>Presioname</button>
                <div>{this.props.products}</div>
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



