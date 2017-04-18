var GreeterMessage = React.createClass({
  render: function(){
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hi {name}!</h1>
        <p>Yay {message}</p>
      </div>
    );
  }
});
var GreeterForm = React.createClass({
  onFormSubmit: function (e){
    e.preventDefault();

    var updates = {}
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }
    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onNewName(updates);
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="enter name"/>
        <textarea ref="message" placeholder="Enter text"/>
        <button>Submit</button>
      </form>
    );
  }
});
var Greeter = React.createClass({
  getDefaultProps: function (){
    return {
      name: 'React',
      message: 'This is from the component'
    };
  },
  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewName: function (updates){
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
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
