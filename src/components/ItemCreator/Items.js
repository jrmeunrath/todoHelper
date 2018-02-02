import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

const Items = (props) => {
    return (
        <div className="list-container">
            <button
                className="btn btn-danger"
                style={buttonStyles}
                onClick={props.deleteAllEvent}
            >
                Delete All
            </button>
            <ul className="list-group">
                {props.items.map((item, index) =>
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
                            onClick={() => props.deleteEvent(index)}
                        >
                            Delete
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
};

Items.propTypes = {
    items: PropTypes.array,
    deleteEvent: PropTypes.func,
    deleteAllEvent: PropTypes.func
};

export default Items;
