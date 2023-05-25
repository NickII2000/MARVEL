import { useState, Component, createContext, useContext } from 'react';
import { Container } from 'react-bootstrap';
// import './App.css';

// class Form extends Component {

//     shouldComponentUpdate(nextProps) {
//         // if (this.props.mail.name === nextProps.mail.name) {
//         //     return false;
//         // } return true;
//         return !(this.props.mail.name === nextProps.mail.name);
//     };

//     render() {
//         console.log('render');
//         return (
//             <Container>
//                 <form className="w-50 border mt-5 p-3 m-auto">
//                     <div className="mb-3">
//                         <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//                         <input value={this.props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
//                     </div>
//                     <br />
//                     <div className="mb-3">
//                         <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                         <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                     </div>
//                 </form>
//             </Container>
//         )
//     }
// }

// function propsCompare(prevProps, nextProps) {
//     return prevProps.mail.name === nextProps.mail.name && prevProps.text === nextProps.text;
// }


const dataContext = createContext({
    mail: "name@example.com",
    text: 'some text'
});

// console.dir(dataContext);

const { Provider } = dataContext;
// const { Provider, Consumer } = dataContext;
// console.dir(Provider);
// console.dir(Consumer);

const Form = (props) => {
    console.log('render');

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <InputComponent />
                </div>
                <br />
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
};

const InputComponent = () => {

    const context = useContext(dataContext);

    return (
        <input
            value={context.mail}
            type="email"
            className='form-control'
            placeholder="name@example.com" />
    )
};

// class InputComponent extends Component {

//     static contextType = dataContext;

//     render() {
//         return (
//             // <Consumer>
//             //     {
//             //         value => {
//             //             return (
//             //                 <input
//             //                     value={value.mail}
//             //                     type="email"
//             //                     className='form-control'
//             //                     placeholder="name@example.com" />
//             //             )
//             //         }
//             //     }
//             // </Consumer>
//             <input
//                 value={this.context.mail}
//                 type="email"
//                 className='form-control'
//                 placeholder="name@example.com" />
//         )
//     }
// }

// InputComponent.contextType = dataContext;

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text'
    });

    return (
        <Provider value={data}>
            <Form text={data.text} />
            <br />
            <button
                onClick={() => setData({
                    mail: "second@example.com",
                    text: 'another text'
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;

// import { lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// // import { MainPage, ComicsPage, SingleComicPage } from '../pages';
// import AppHeader from "../appHeader/AppHeader";
// import Spinner from "../spinner/Spinner";

// const Page404 = lazy(() => import('../pages/404'));
// const MainPage = lazy(() => import('../pages/MainPage'));
// const ComicsPage = lazy(() => import('../pages/ComicsPage'));
// const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));

// const App = () => {

//     return (
//         <Router>
//             <div className="app">
//                 <AppHeader />
//                 <main>
//                     <Suspense fallback={<Spinner />}>
//                         <Switch>
//                             <Route exact path="/">
//                                 <MainPage />
//                             </Route>
//                             <Route exact path="/comics">
//                                 <ComicsPage />
//                             </Route>
//                             <Route exact path="/comics/:comicId">
//                                 <SingleComicPage />
//                             </Route>
//                             <Route path='*'>
//                                 <Page404 />
//                             </Route>
//                         </Switch>
//                     </Suspense>
//                 </main>
//             </div>
//         </Router>
//     )
// }

// export default App;