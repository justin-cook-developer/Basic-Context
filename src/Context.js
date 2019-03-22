import React from 'react';

 export const MyContext = React.createContext();

class Context extends React.Component {
  toggleBackgroundColor = () => {
    function determineColor(color) {
      return color === 'gray' ? 'white' : 'gray';
    }

    this.setState(state => ({
      value: {
        ...state.value,
        backgroundColor: determineColor(state.value.backgroundColor),
      },
    }));
  }

  state = {
    value: {
      backgroundColor: 'gray',
      toggleBackgroundColor: this.toggleBackgroundColor,
    },
  };

  render() {
    return (
      <MyContext.Provider value={this.state.value}>
        { this.props.children }
      </MyContext.Provider>
    );
  }
}

export default Context;
