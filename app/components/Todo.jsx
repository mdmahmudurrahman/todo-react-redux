var React = require('react');

var Todo = React.createClass({
  render: function () {
    var {id, text} = this.props;
    debugger;
    // console.log(text);
    // console.log(this.props);

    return (
      <div>
        {id}. {text}
      </div>
    )
  }
});

module.exports = Todo;
