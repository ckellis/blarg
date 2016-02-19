var React = require('react');
var List = require('./components/list');

var options = {
  title: 'Test',
  items: [
    'test1',
    'test2',
    'test3'
  ]
};

var element = React.createElement(List, options);
React.render(element, document.querySelector('.container'));
