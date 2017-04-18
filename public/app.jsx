var Greeter = React.createClass({
  getDefaultProps: function (){
    return {
      name: 'React',
      message: 'This is from the component'
    };
  },
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>Hey {message + '!'}</p>
      </div>
    );
  }
});

var firstName = "Kim";
var messageMe = "message from prop!";

ReactDOM.render(
  <Greeter name={firstName} message={messageMe}/>,
  document.getElementById('app')
);
