var React = require('react');
var ListElement = require('./list-element');

module.exports = React.createClass({
  render: function() {
    var list = this.props.items.map(function(item) {
      return <ListElement item={item}/>
    });
    return <ul>
      {list}
    </ul>
  }
});
