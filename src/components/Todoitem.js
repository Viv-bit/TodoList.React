import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
        return {
            background: '#b19cd9',
            padding:'0.9rem',
            borderBottom: '0.2rem #000 dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind (this, id)} /> {' '}
                { title }
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

//PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}
const btnStyle = {
    background: '#871F78',
    color: '#f3f3f3',
    border:'none',
    padding: '0.2rem 0.4rem',
    borderRadius: '50%',
    corsor: 'pointer',
    float: 'right'
}
export default Todoitem