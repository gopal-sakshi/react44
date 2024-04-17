import React from 'react';
import ReactDOMClient from 'react-dom/client';
import SayingHello from './app23';


// // APPROACH III ---> strict mode...
// //  activates additional deprecation checks & warnings for its child components
const root84 = ReactDOMClient.createRoot(document.getElementById('root78'));
root84.render(
    <React.StrictMode>
        <SayingHello job11="doctor; using react-dom/client"/>
    </React.StrictMode>
);