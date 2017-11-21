import React from 'react';
import { connect }  from 'react-redux';

import './add-cheese.css';
import { addCheese } from '../actions/cheese';

export class AddCheese extends React.Component {
    
    onSubmit(event) {
        event.preventDefault();
        const cheese = {cheese: this.input.value};
        this.props.dispatch(addCheese(cheese))
        this.input.value = '';
    }

    render() {     

        return (
            <form className="card cheese-form" onSubmit={e => this.onSubmit(e)}>
                <input type="text" ref={input => this.input = input} />
                <button>Add</button>
            </form>
        );
    }
}

export default connect()(AddCheese);