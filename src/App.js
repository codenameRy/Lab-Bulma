import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar.jsx';
import FormField from './formfield/FormField.jsx';
import Message from './message/Message.jsx'

class App extends Component {
  render() {
  return (
    <div className="App">
    <header>
    <Navbar />
    </header>
    <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    
    </div>
  );
  }
}

export default App;
