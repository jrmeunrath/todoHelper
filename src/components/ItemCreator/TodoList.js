import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import deep from 'deep-get-set';
import TodoListItem from './TodoListItem';
import {
    deleteAllItems,
    getTodoList
} from './actions';

const buttonStyles = {
    float: 'right',
    marginBottom: '20px',
    textAlign: 'right'
};

class TodoList extends Component {
    debugger;
    render() {
        return (
            <div
                className="todoList"
                style={{marginTop: '40px'}}
            >
                {this.props.items.length ?
                    <div className="list-container">
                        <button
                            className="btn btn-danger"
                            style={buttonStyles}
                            onClick={this.props.deleteAllEvent}
                        >
                            Delete All
                        </button>
                        <ul className="list-group">
                            {this.props.items.map((item, index) =>
                                <div key={item.id}>
                                    <TodoListItem
                                        item={item}
                                        itemIndex={index}
                                    />
                                </div>
                            )}
                        </ul>
                    </div>
                    :
                    <div style={{marginTop: '20px'}}>
                        <h4>Task list here..</h4>
                    </div>
                }
            </div>
        )
    }
};

TodoList.propTypes = {
    items: PropTypes.array,
    deleteEvent: PropTypes.func
};

const mapStateToProps = (state) => {
    const list = getTodoList(state);

    return {
        items: list
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            deleteAllEvent: deleteAllItems
        },
        dispatch
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
