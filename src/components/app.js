import React, { Component } from 'react';
import ItemCreator from './ItemCreator';

const styles = {
    marginTop: '20px'
};

export default class App extends Component {
    render() {
        return (
              <div
                  className="container"
                  style={styles}
               >
                  <ItemCreator />
              </div>
        );
    }
}
