import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";

import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";



// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Switch>
                        <Route exact path="/">
                        </Route>
                        <Route exact path="/comics">
                            <AppBanner />
                            <ComicsList />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App;