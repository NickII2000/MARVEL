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


/////////////// оригинал
/*

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const initialState = {value: 0};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            return {
                ...state,
                value: state.value + 1
            };
        case "DEC":
            return {
                ...state,
                value: state.value - 1
            };
        case "RND":
            return {
                ...state,
                value: state.value * action.payload
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const update = () => {
    document.getElementById('counter').textContent = store.getState().value;
}

store.subscribe(update);

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', payload: value});

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    store.dispatch(rnd(value));
});



// let state = reducer(initialState, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// console.log(state);

ReactDOM.render(
  <React.StrictMode>
    <>
    
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

*/

import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';
import { legacy_createStore as createStore, bindActionCreators } from 'redux';
// import './style/style.scss';
import reducer from './reducer';
// import { inc, dec, rnd } from './actions';
import * as actions from './actions';

const store = createStore(reducer);

const { dispatch, subscribe, getState } = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
};

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(args));
// };

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10 - 5);
    rnd(value);
});

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        // <React.StrictMode>
        <>
            {/* Redux-Excercise-190 */}
        </>
        // </React.StrictMode>
    );