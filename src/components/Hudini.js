import React, { Component } from 'react';

class Hudini extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    render() {
        return <div>{this.state.show ? "Now you see me": "Now you dont"}</div>
    }
}

export default Hudini