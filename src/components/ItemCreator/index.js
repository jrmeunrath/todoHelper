import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Items from './Items';
import {
    addTodoItem,
    deleteTodoItem,
    getTodoList,
    deleteAllItems
} from './actions';

const styles = {
    cursor: 'pointer'
};

class ItemCreator extends Component {
    state = {
        title: 'To Do Helper',
        taskInputValue: ''
    }

    onChangeEvent = (event) => {
        this.setState({
            taskInputValue: event.target.value
        })
    }

    onSubmit = () => {
        this.props.addTodoItem(this.state.taskInputValue);
        this.setState({
            taskInputValue: ''
        });
    }

    onKeyPressEvent = (event) => {
        if (event.key === 'Enter') {
            this.onSubmit();
        }
    }

    render() {
        return (
            <div className="itemCreator">
                <h3>{this.state.title}</h3>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.taskInputValue}
                        onChange={this.onChangeEvent}
                        onKeyPress={this.onKeyPressEvent}
                        placeholder="Enter task here"
                    />
                    <span
                        className="input-group-addon btn btn-primary"
                        style={styles}
                        onClick={this.onSubmit}
                    >
                        Submit
                    </span>
                </div>
                <div
                    className="todoList"
                    style={{marginTop: '40px'}}
                >
                    {this.props.todoList.length ?
                        <Items
                            items={this.props.todoList}
                            deleteEvent={this.props.deleteTodoItem}
                            deleteAllEvent={this.props.deleteAllToDos}
                        />
                        :
                        <div style={{marginTop: '20px'}}>
                            <h4>Task list here..</h4>
                        </div>
                    }
                </div>
            </div>
        );
    }
};

ItemCreator.propTypes = {
    todoList: PropTypes.array,
    addTodoItem: PropTypes.func,
    deleteTodoItem: PropTypes.func,
    deleteAllToDos: PropTypes.func
};

const mapStateToProps = (state) => {
    const list = getTodoList(state);

    return {
        todoList: list
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            addTodoItem: addTodoItem,
            deleteTodoItem: deleteTodoItem,
            deleteAllToDos: deleteAllItems
        },
        dispatch
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemCreator);
