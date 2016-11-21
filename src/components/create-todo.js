import React from 'react';

export default class CreateToDo extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleCreateTask.bind(this)}>
                <input type="text" placeholder="What do I need to do" ref="createInput"/>
                <button> Create Task </button>
            </form>
        )
    }

    handleCreateTask(event) {
        event.preventDefault(); // prevents refresh upon button press
        let task = this.refs.createInput.value;

        if (this.isValidInput(task)) {
            // this.props refers to its own context, whereas the function createTask holds
            // the context of the app where we bound "this"
            this.props.createTask(task);
            this.refs.createInput.value = '';
        }
    }

    isValidInput(input) {
        let isEmpty = !Boolean(input);
        let index = this.props.todos.findIndex((todo) => {
            return todo.task == input;
        })

        let isRepeat = index == -1? false : true;

        console.log(isEmpty, isRepeat);

        if (isEmpty) {
            window.alert("Task is empty");
        }

        if (isRepeat) {
            window.alert("Task already exists");
        }

        return !isEmpty && !isRepeat;



    }

}