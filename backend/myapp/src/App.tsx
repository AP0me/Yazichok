import React from 'react';
import './App.css';

interface AppState {
  World: string;
}

class App extends React.Component<{}, AppState> {
  interval: any;
  constructor(props: {}){
    super(props);
    this.state = {
      World: "World0",
    };
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      const lastChar = this.state.World.charAt(this.state.World.length - 1);
      const lastNum = parseInt(lastChar);
      this.setState({
        World: this.state.World.replace(lastChar, (lastNum + 1).toString()),
      });
    }, 3000);
  }

  componentWillUnmount(){
    if (this.interval !== undefined){
      clearInterval(this.interval);
    }
  }

  render(){
    return (
      <div className="App">
        <div className='appGrid'>
          <div className='appSideBar'><div className='gridText'>appSideBar</div></div>
          <div className='appHeader' ><div className='gridText'>appHeader</div></div>
          <div className='appDesk'   ><div className='gridText'>appDesk</div></div>
        </div>
      </div>
    );
  }
}

export default App;
