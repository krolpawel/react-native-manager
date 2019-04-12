import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "",
            authDomain: "rn-manager-a.firebaseapp.com",
            databaseURL: "https://rn-manager-a.firebaseio.com",
            projectId: "rn-manager-a",
            storageBucket: "",
            messagingSenderId: ""
        };

        firebase.initializeApp(config);
    }
    render() {
        const middleware = [ReduxThunk];
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        //export default createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));
        const store = createStore(reducers,composeEnhancers(applyMiddleware(...middleware)));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;