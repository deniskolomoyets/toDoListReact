import React from 'react';
import './Header.css';

export default class Header extends React.Component{
    state = {
        inp:''
    }

    addTodo = () =>{
        this.props.addTodo(this.state.inp);
        this.setState({inp:''});
    }

    render(){
        return <div className='Header'>
            <input type='text'
            value={this.state.inp}
            onChange={(e) => this.setState({inp:e.target.value})}
             />
            <button className='btn' onClick={this.addTodo}>Add</button>
        </div>
    }

}