import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Items } from '../api/items.js';
// import { Hello } from './Hello.jsx';
// import { Info } from './Info.jsx';

class App extends Component {
  
  // getItems = () => {
  //   return [
  //     { _id: 1, text: 'Pineapple on Pizza' },
  //     { _id: 2, text: 'No Pineapple on Pizza' },
  //   ]
  // }

  renderItems = () => {
    return this.props.items.map(item => {
      return (
        <li key={item._id}>{item.text}</li>
      )
    })
  }
  render() {
    return (
      <main>
        <header>
          <h1>Versus</h1>
        </header>

        <ul>
          {this.renderItems()}
        </ul>

      </main>
    )
  }

};

export default withTracker(() => {
  return {
    items: Items.find({}).fetch(),
  }
})(App);