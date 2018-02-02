import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    updateTodoItem,
    deleteTodoItem
} from './actions';

const listStyle = {
    display: 'inline-flex',
    width: '100%',
    flexFlow: 'row',
    marginBottom: '20px'
};

const listFontStyles = {
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '24px',
    width: '80%'
};

class TodoListItem extends Component {
    state = {
        itemValue: this.props.item.item,
        editEnabled: false
    }

    onEditItemListEvent = (event) => {
        event.preventDefault();
        if (!this.state.editEnabled) {
            this.setState({
                editEnabled: !this.state.editEnabled
            });

            return true;
        }

        this.setState({
            editEnabled: !this.state.editEnabled
        }, () => {
            this.props.onUpdateEvent(this.props.itemIndex, this.state.itemValue)
        })
    }

    onChangeEvent = (event) => {
        this.setState({
            itemValue: event.target.value
        })
    }

    render() {
        return (
            <li
                className="list-group-item"
                style={listStyle}
            >
                {!this.state.editEnabled ? <span style={listFontStyles} >{this.props.item.item}</span> :
                <form
                    onSubmit={this.onEditItemListEvent}
                    className="input-group"
                    style={{
                        display: 'inline-block',
                        width: '77%'
                    }}
                >
                    <input
                        type="text"
                        id="todoItemUpdateInput"
                        className="form-control"
                        style={{
                            padding: '6px 10px',
                            fontSize: '24px',
                            fontWeight: 'bold'
                        }}
                        onChange={this.onChangeEvent}
                        value={this.state.itemValue}
                    />
                </form>}
                <div
                    className="btn-container"
                    style={{
                        margin: '0 0px 0px 30px'
                    }}
                >
                    <button
                        style={{fontWeight: 'bold', cursor: 'pointer'}}
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.props.deleteEvent(this.props.itemIndex)}
                    >
                        Delete
                    </button>
                    <button
                        style={{fontWeight: 'bold', cursor: 'pointer', marginLeft: '20px'}}
                        type="button"
                        className="btn btn-primary"
                        onClick={this.onEditItemListEvent}
                    >
                        {!this.state.editEnabled ? 'Edit' : 'update'}
                    </button>
                </div>
            </li>
        )
    }
};

TodoListItem.propTypes = {
    item: PropTypes.shape({}),
    itemIndex: PropTypes.number,
    onUpdateEvent: PropTypes.func
};

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteEvent: deleteTodoItem,
        onUpdateEvent: updateTodoItem
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);
