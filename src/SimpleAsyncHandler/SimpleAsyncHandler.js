import React, { Component } from 'react'
import api from './api'

export default class SimpleAsyncHandler extends Component {
    state = {
        email: null,
        password: null,
        token: null
    }
    handleLogin = () => {
        const { email, password } = this.state
        return api.login(email, password)
            .then(token => this.setState({token}))
    }
    render () {
        return (
            <div>
                <input type="text" onChange={e => this.setState({ email: e.target.value })} />
                <input type="password" onChange={e => this.setState({ password: e.target.value })} />
                <button onClick={this.handleLogin}>Log in</button>
                <div id="token">Token is: {this.state.token}</div>
            </div>
        )
    }
}