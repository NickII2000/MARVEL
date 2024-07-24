// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './components/app/App';

// import './style/style.scss';

// // было в версии 17
// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );
// // ниже версия 18
// ReactDOM
//   .createRoot(document.getElementById('root'))
//   .render(
//     // <React.StrictMode>
//     <App />
//     // </React.StrictMode>
//   );


/////////////// выше MARVEL

import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';

import reducer from './reducer';

import { Provider } from 'react-redux';

import App from './components/App';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>

            <Provider store={store}>
                <App />
            </Provider>

        </React.StrictMode >
    );
