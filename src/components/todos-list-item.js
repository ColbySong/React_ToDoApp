import React from 'react';

export default class TodosListItem extends React.Component {
    // not best practice to have state in child components
    // is it wrong to have state in child components?
    // how would this be done otherwise
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }

    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionSections()}
            </tr>
        )
    }

    // dynamic styling
    renderTaskSection() {
        // es6 destructuring
        let { task, isCompleted } = this.props.todo;
        let taskStyle = {
            color: isCompleted? 'green' : 'red',
            cursor: 'pointer'
        }

        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" placeholder="new task" ref="editInput"/>
                    </form>
                </td>
            )
        }

        return (
            <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
                {task}
            </td>

        )
    }

    renderActionSections() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            )
        }

        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.todo.task)}>Delete</button>
            </td>
        )
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();
        let oldTask = this.props.todo.task;
        let newTask = this.refs.editInput.value;
        this.props.editTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }

}