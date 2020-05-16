import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Items = new Mongo.Collection('items');

Meteor.methods({
  insertNewPoll(question, item1, item2) {
    check(question, String);
    check(item1, String);
    check(item2, String);

    Items.insert({
      question,
      first: { item1: item1, count: 0 },
      second: { item2: item2, count: 0 },
      createdAt: new Date(),
    })
  },

  updateCounterItem1(props) {
    check(props, Object);

    Items.update(props.id, {
      $inc: { "first.count": 1 }
    })
  },
  
  updateCounterItem2(props) {
    check(props, Object);

    Items.update(props.id, {
      $inc: { "second.count": 1 }
    })
  },
})