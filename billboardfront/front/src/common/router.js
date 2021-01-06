import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import CommunityList from "../component/CommunityList";
import MainLayOut from "../layout/mainLayout"

function Router() {

    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <div>
                        <Route exact path="/" render={() => <MainLayOut></MainLayOut>}/>
                        <Route path="/Community" render={() => <MainLayOut><CommunityList /></MainLayOut>}/>
                    </div>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default Router;
