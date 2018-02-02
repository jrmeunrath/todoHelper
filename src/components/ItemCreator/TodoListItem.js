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
        newValue: '',
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
            const updatedValue = this.state.newValue !== '' ?
                this.state.newValue : this.state.itemValue;
            this.props.onUpdateEvent(this.props.itemIndex, updatedValue)
        })
    }

    onChangeEvent = (event) => {
        this.setState({
            newValue: event.target.value
        })
    }

    render() {
        return (
            <li
                className="list-group-item"
                style={listStyle}
            >
                {!this.state.editEnabled ? <span style={listFontStyles} >{this.props.item.item}</span> :
                <form onSubmit={this.onEditItemListEvent} className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.newValue}
                        onChange={this.onChangeEvent}
                    />
                </form>}
                <div className="btn-container">
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
