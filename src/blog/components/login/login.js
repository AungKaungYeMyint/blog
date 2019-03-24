import React from 'react';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    login = (e) => {
        e.preventDefault();
        this.props.addNewEventHandler(this.state.username,this.state.password);
    }



    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.login}>
                    <label htmlFor='username'>Username: <input type="text" id='username' value={this.state.name} onChange={this.onUsername}></input></label>
                    <label htmlFor='password'>Password: <input type="text" id='password' value={this.state.password} onChange={this.onPassword}></input></label>
                    <button type="submit">Login</button>
                </form>
            </React.Fragment>
        )
    };

}