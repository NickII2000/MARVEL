import { useState } from 'react';
// import './App.css';
import Form from './Form';
import dataContext from './context';

const { Provider } = dataContext;

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail() {
        setData({ ...data, mail: 'test@gmail.com' });
    }

    return (
        <Provider value={data}>
            <Form text={data.text} />
            <br />
            <button
                onClick={() => setData({
                    ...data,
                    mail: "second@example.com",
                    text: 'another text!!!',
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