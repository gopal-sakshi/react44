import React from 'react';
import ReactDOM from 'react-dom';
import SayingHello from './app23';
import Hello from './app24';
// // Whats the use of <React.StrictMode>
// ReactDOM.render(
//   <React.StrictMode> 
//     <app23 />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// it seems, first letter must be capital... sayingHello didnt work, but SayingHello worked
ReactDOM.render(<SayingHello />, document.getElementById('root78'));
ReactDOM.render(<Hello />, document.getElementById('root78'));