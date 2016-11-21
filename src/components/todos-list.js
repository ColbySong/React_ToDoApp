import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
    render() {
        return (
            <table>
                <TodosListHeader/>
                <tbody>
                  {this.props.todos.map((todo, index) => {
                      return <TodosListItem key={index} todo={todo} {...this.props}/>;
                  })}
                </tbody>
            </table>
        )
    }
}