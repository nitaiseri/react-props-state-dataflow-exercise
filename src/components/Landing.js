import React, { Component } from 'react';

class Landing extends Component {
    hottestItemOnStore() {
        let hottestItem = this.props.store[0];
        for (const item of this.props.store){
            if (item.price > hottestItem.price){
                hottestItem = item;
            }
        }
        return hottestItem;
    }


    render() {
        let item = this.hottestItemOnStore();
        return <div key={this.props.name}>Welcome {this.props.name}, The hottest Item is {item.name} for {item.price}$.</div>
    }
}

export default Landing