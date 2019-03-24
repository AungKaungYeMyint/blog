import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: ""
        }
    }

    onUserName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    storeUser = () => {
        const id = this.createUser(this.state.name, this.state.password);
        this.props.loginEvent(id);
    }

    createUser = (name,password) => {
        let new_user = [];
        let acc_array = [];
        const id = new_user.length + 1;
        new_user.push(id);
        new_user.push(name);
        new_user.push(password);

        acc_array.push(new_user);

        localStorage.setItem("user_accounts", JSON.stringify(acc_array));
    }

    render() {
        return (
            <form action="/articles" onSubmit={this.storeUser}>
                <label htmlFor="username">UserName : </label>
                <input type='text' id="username" value={this.props.name} onChange={this.onUserName} /><br />

                <label htmlFor="password">Password : </label>
                <input type="password" id="password" value={this.props.password} onChange={this.onPassword} /><br />

                <button type="submit">Register</button>
            </form>
        )
    };

}


export default Register