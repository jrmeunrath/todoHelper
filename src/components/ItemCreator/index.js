// imported libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// imported components
import Items from './Items';
import TodoList from './TodoList';

import {
    addTodoItem
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
        this.props.addTodo(this.state.taskInputValue);
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
                <TodoList />
            </div>
        );
    }
};

ItemCreator.propTypes = {
    addTodo: PropTypes.func
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            addTodo: addTodoItem
        },
        dispatch
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemCreator);
