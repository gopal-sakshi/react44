import React from 'react';
import ReactDOM from 'react-dom';
import SayingHello from './app23';



// // Whats the use of <React.StrictMode>
// ReactDOM.render(
//   <React.StrictMode> 
//     <app23 />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



ReactDOM.render(<SayingHello job="doctor"/>, document.getElementById('root78'));
// it seems, first letter must be capital... sayingHello didnt work, but SayingHello worked
// SayingHello ---> is a component

