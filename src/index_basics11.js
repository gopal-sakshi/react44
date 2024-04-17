import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';
import SayingHello from './app23';
import myElement from './table23';


// // APPROACH I        ------> react-dom
// ReactDOM.render(<SayingHello job11="nurse, using react-dom"/>, document.getElementById('root78'));

// // APPROACH II       ------> react-dom/client
const root84 = ReactDOMClient.createRoot(document.getElementById('root78'));

// root84.render(<div>Hello <u>Real Madrid</u> </div>);                     // render html directly
// root84.render(myElement);                                                // render html from another file
root84.render(<SayingHello job11="doctor; using react-dom/client"/>)     // render another component




