import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Items } from '../api/items.js';
// import { Hello } from './Hello.jsx';
// import { Info } from './Info.jsx';

const App = (props) => {
  
  // getItems = () => {
  //   return [
  //     { _id: 1, text: 'Pineapple on Pizza' },
  //     { _id: 2, text: 'No Pineapple on Pizza' },
  //   ]
  // }

  renderItems = () => {
    return props.items.map(item => {
      return (
        <li key={item._id}>{item.text}</li>
      )
    })
  }
    return (
      <main>
        <header>
          <h1>Versus</h1>

          <form action="">
            <label htmlFor="question">Add your question</label>
            <input type="text" id="question" placeholder="Question" />

            <label htmlFor="item1">Item 1</label>
            <input type="text" id="item1" placeholder="Item 1" />

            <label htmlFor="item2">Item 2</label>
            <input type="text" id="item2" placeholder="Item 2" />
          </form>
        </header>

        <ul>
          {renderItems()}
        </ul>

      </main>
    )

};

export default withTracker(() => {
  return {
    items: Items.find().fetch(),
  }
})(App);