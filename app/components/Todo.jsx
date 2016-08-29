var React = require("react");


var Todo = React.createClass({
  render: function () {
    var {id, text, completed} = this.props;
    // console.log(text);
    // console.log(this.props);

    return (
      <div>
        <div>
          <input type="checkbox" checked={completed}/>
          {text}</div>
      </div>
    );
  }
});

module.exports = Todo;
