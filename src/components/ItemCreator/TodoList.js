import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import deep from 'deep-get-set';
import {
    deleteTodoItem,
    deleteAllItems,
    getTodoList
} from './actions';

const listStyle = {
    display: 'inline-flex',
    width: '100%',
    flexFlow: 'row'
};

const listFontStyles = {
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '24px',
    width: '80%'
};

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
                                <li
                                    key={item.id}
                                    className="list-group-item"
                                    style={listStyle}
                                >
                                    <span style={listFontStyles} >{item.item}</span>
                                    <button
                                        style={{fontWeight: 'bold', cursor: 'pointer'}}
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => this.props.deleteEvent(index)}
                                    >
                                        Delete
                                    </button>
                                </li>
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
    deleteEvent: PropTypes.func,
    deleteAllEvent: PropTypes.func
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
            deleteEvent: deleteTodoItem,
            deleteAllEvent: deleteAllItems
        },
        dispatch
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
