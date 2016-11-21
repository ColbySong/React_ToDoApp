import React from 'react';
import TodosList from './todos-list';
import CreateToDo from './create-todo'

let todos = [
    {
        task: "make react tutorial",
        isCompleted: false
    },
    {
        task: "eat dinner",
        isCompleted: true
    }
]


export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            todos: todos
        };
    }
    render() {
        return (
            <div>
                <h1> React todolist app</h1>
                <CreateToDo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
                <TodosList todos={this.state.todos} toggleTask={this.toggleTask.bind(this)} 
                editTask={this.editTask.bind(this)}
                deleteTask={this.deleteTask.bind(this)}/>
            </div>
        )

    }

    createTask(task) {
        this.state.todos.push({task: task, isCompleted:false});
        this.setState({ todos: this.state.todos });
    }

    toggleTask(task){
        let foundToDo = this.state.todos.find((todo) => {
            return todo.task == task;
        });

        foundToDo.isCompleted = !foundToDo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    editTask(oldTask, newTask) {
        let foundToDo = this.state.todos.find((todo) => {
            return todo.task == oldTask;
        });
        
        foundToDo.task = newTask;
        this.setState({ todos: this.state.todos });


    }

    deleteTask(taskToDelete) {
        for (let i = 0; i < this.state.todos.length; i++) {
            if (this.state.todos[i].task == taskToDelete) {
                this.state.todos.splice(i, 1);
            }
        }
        this.setState({ todos: this.state.todos });
        
    }
}