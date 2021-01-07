import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import CommunityList from "../pages/community/CommunityList";
import MainLayOut from "../layout/mainLayout"
import Write from "../pages/common/write";
import Detail from '../pages/common/detail';
import Login from '../pages/common/Login';

function Router() {

    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <div>
                        <Route exact path="/" render={() => <MainLayOut></MainLayOut>}/>
                        <Route exact path="/Login" render={() => <MainLayOut><Login/></MainLayOut>}/>
                        <Route exact path="/Community" render={() => <MainLayOut><CommunityList /></MainLayOut>}/>
                        <Route exact path="/Community/write" render={() => <MainLayOut><Write /></MainLayOut>}/>
                        <Route path="/Community/detail/:id" render={() => <MainLayOut><Detail /></MainLayOut>}/>
                    </div>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default Router;
