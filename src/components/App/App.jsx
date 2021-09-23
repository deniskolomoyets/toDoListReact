import React from 'react';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';

import './App.css';

export default class App extends React.Component{
    state = {
        todos:[]
        
    }

    onChangeStatus = (index,status) => {
         const tmp = [...this.state.todos];//copy the array "todos"
        //  tmp[index].done = status; //(BAD WAY-1:00:00)put a new status that will come from outside
        tmp[index] = {...tmp[index],done:status};
        this.setState({todos:tmp});//the object in which the array "todos"=tmp
    }

    onRemove = (index) =>{
        // const tmp = [...this.state.todos];
        // tmp.splice(index,1);
        // this.setState({todos:tmp});

        this.setState({
            todos: this.state.todos.filter((_,i) => i !== index)
        })
    }

    addTodo = (title) => {
        this.setState({
            todos:[...this.state.todos,{title:title,done:false}]//обьект, ключ и value из локальной переменной должны совпадать
        });
    }

    render(){
        return <div className="wrapper">
            <Header addTodo={this.addTodo}/>
            <hr/>
            <TodoList
                todos={this.state.todos}
                onChangeStatus={this.onChangeStatus}
                onRemove={this.onRemove}
            />
        </div>
    }
}