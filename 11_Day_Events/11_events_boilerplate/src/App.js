import React from 'react'

function getRandomArbitrary() {
  return (Math.random() * (500)) + 'px';
}

class App extends React.Component {
  state = {
    styles: {
      marginTop: '',
      marginLeft: ''
    }
  }

  handleOnMouseEnter = () => {
    this.setState({
      styles: {
        marginTop: getRandomArbitrary(),
        marginLeft: getRandomArbitrary()
      }
    })
  }

  render() {
    return (
      <div className='app'>
          <button style={this.state.styles} onMouseEnter={this.handleOnMouseEnter}>
            Click Me !!!
          </button>
      </div>
    )
  }
}

export default App
