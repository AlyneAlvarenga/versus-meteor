import React, { useState } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Items } from '../api/items.js';
import Item from './Item';

const App = (props) => {
  const [question, setQuestion] = useState('');
  const [item1, setItem1] = useState('');
  const [item2, setItem2] = useState('');


  handleSubmit = (e) => {
    e.preventDefault();

    if (question !== '' && item1 !== '' && item2 !== '') {
      Meteor.call('insertNewPoll', question, item1, item2);
  
      setQuestion('');
      setItem1('');
      setItem2('');
    } else {
      alert('Please fill out all fields!');
    }
  }

  renderItems = () => {
    return props.items.map(item => (
      <Item key={item._id}
        id={item._id}
        question={item.question}
        item1={item.first.item1}
        item2={item.second.item2}
        count1={item.first.count}
        count2={item.second.count}
      />
    ))
  }
    return (
      <>
        <header>
          <h1>Versus</h1>

          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="question">Add your question</label>
            <input type="text" id="question" placeholder="Question" name="question" value={question}
            onChange={e => setQuestion(e.target.value)}/>

            <label htmlFor="item1">Item 1</label>
            <input type="text" id="item1" placeholder="Item 1" name="item1" value={item1}
            onChange={e => setItem1(e.target.value)}/>

            <label htmlFor="item2">Item 2</label>
            <input type="text" id="item2" placeholder="Item 2" name="item1" value={item2}
            onChange={e => setItem2(e.target.value)}/>
            
            <button>Submit</button>
          </form>
        </header>

        <main>
          <ul>
            {renderItems()}
          </ul>
        </main>

      </>
    )

};

export default withTracker(() => {
  return {
    items: Items.find({}, { sort: {createdAt: -1} }).fetch(),
  }
})(App);