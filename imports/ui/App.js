import React, { useState } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Items } from '../api/items.js';
// import { Hello } from './Hello.jsx';
// import { Info } from './Info.jsx';

const App = (props) => {
  const [question, setQuestion] = useState('');
  const [item1, setItem1] = useState('');
  const [item2, setItem2] = useState('');


  handleSubmit = (e) => {
    e.preventDefault();

    Items.insert({
      question,
      first: { item1: item1, count: 0 },
      second: { item2: item2, count: 0 },
      createdAt: new Date(),
    })

    setQuestion('');
    setItem1('');
    setItem2('');
  }

  renderItems = () => {
    return props.items.map(item => {
      return (
        <li key={item._id}>
          <h2>{item.question}</h2>
          <button>{item.first.item1}</button>
          <button>{item.second.item2}</button>
        </li>
      )
    })
  }
    return (
      <main>
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