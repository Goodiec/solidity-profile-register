import React from 'react'
import './App.css'
import web3 from './web3';
import profile from './profile';

class App extends React.Component {
  state = {
    message:'',
    firstName: '',
    lastName: '',
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // async componentDidMount(){
  //   const profiles = await profile.methods.createProfile(this.state.firstName, this.state.lastName).call();
  //   console.log(profiles);
  // };

  onSubmit = async e => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };
    console.log(userData)
    console.log('Attempting to deploy from account', accounts[0]);

    this.setState({message: 'Waiting on transaction success...'});
    
    const profiles = await profile.methods.createProfile(this.state.firstName, this.state.lastName).send({
      from: accounts[0],
      value: web3.utils.toWei('0.01', 'ether')
    });
    this.setState({message: 'Registeration was successfull'});
    console.log(profiles);

  };

  render(){
  return (
    <div>
      <h2>Register your profile</h2>
      <hr/>
      <form onSubmit={this.onSubmit}>
        <div>
          <label>First Name</label><br/>
          <input 
            value = {this.state.firstName}
            onChange={this.onChange}
            type='text'
            placeholder='First Name'
            name='firstName'
            className='form-control'
          /><br/>
          <label>Last Name</label><br/>
          <input 
            value = {this.state.lastName}
            onChange={this.onChange}
            type='text'
            placeholder='Last Name'
            name='lastName'
            className='form-control'
          />
        </div><br/>
        <button className="btn btn-primary">Register</button>
      </form>
      <h1>{this.state.message}</h1>
      <div id="users-table">

      </div>
    </div>
  );
}
}

export default App;
