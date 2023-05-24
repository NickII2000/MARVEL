import { useState, memo, useCallback } from 'react';
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

const Form = memo((props) => {
    console.log('render');
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input value={props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <br />
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
});

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text'
    });

    const onLog = useCallback(() => {
        console.log('wow');
    }, []);

    return (
        <>
            <Form mail={data.mail} text={data.text} onLog={onLog} />
            <br />
            <button
                onClick={() => setData({
                    mail: "!!!name@example.com",
                    text: 'some text'
                })}>
                Click me
            </button>
        </>
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