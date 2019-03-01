import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import CommonApp from './CommonApp'
// import Clock from './Clock'
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// class Index extends Component{

//     constructor(){
//         super()
//         this.state={
//             display: true
//         }
//     }

//     handleClockDisplay(){
//         this.setState({
//             display: !this.state.display
//         })
//     }

//     render(){
//         return(
//             <div>
//                 {this.state.display ? <Clock /> : null}
//                 <button onClick={this.handleClockDisplay.bind(this)}>显示或隐藏时钟</button>
//             </div>
//         )
//     }
// }

ReactDOM.render(<CommonApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
