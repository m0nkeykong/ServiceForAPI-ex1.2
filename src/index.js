import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BookCategories from './Components/BookCategories';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Switch, Route } from 'react-router-dom';
import CategoryByID from './Components/CategoryByID.js';
import subStatusSubSubject from './Components/subStatusSubSubject';
import Header from './Header';

ReactDOM.render(<HashRouter>
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path='/' component={BookCategories}></Route>
                            <Route exact path='/byID/:id' component={CategoryByID}></Route>
                            <Route exact path='/subcategories/ByStatusBySubject/:status/:subject' component={subStatusSubSubject}></Route>
                        </Switch>
                    </div>
                </HashRouter>
                    , document.getElementById('root'));
registerServiceWorker();
