var React = require("react");


var Todo = React.createClass({
  render: function () {
    var {id, text} = this.props;
    debugger;
    // console.log(text);
    // console.log(this.props);

    return (
      <div>
        <div>{id}. {text}</div>
      </div>
    );
  }
});

module.exports = Todo;
