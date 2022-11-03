import React, { Component } from 'react';

class Item extends Component {
    render() {
        let item = this.props.data;
        return <div>Item:{item.item}, Price:{this.props.discount? item.price*(1-item.discount): item.price}</div>
    }
}

export default Item