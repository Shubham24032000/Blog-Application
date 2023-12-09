// import {createStore,compose,applyMiddleware,combineReducers} from 'redux';
// import { configureStore } from '@reduxjs/toolkit';


// import ThunkMiddleware from 'redux-thunk';

// import {adminReducer} from './reducers/adminReducer';

// import {dashCategoryReducer} from './reducers/dashCategoryReducer';

// import {dashTagReducer} from './reducers/dashTagReducer';

// import {articalReducer} from './reducers/articalReducer';

// import {homeReducer} from './reducers/home/homeReducer';

// import {likeDislikeReducer} from './reducers/home/likeDislikeReducer';

// import {homeCommentReducer} from './reducers/home/homeCommentReducer';

// const rootReducer = combineReducers({
//     adminReducer,
//     dashboradCategory : dashCategoryReducer,
//     dashboradTag : dashTagReducer,
//     dashboradArtical : articalReducer,
//     homeReducer,
//     likeDislike : likeDislikeReducer,
//     userComment : homeCommentReducer
// });

// const middleware = [ThunkMiddleware];

// const store = configureStore(rootReducer,compose(applyMiddleware(...middleware),
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ));

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import ThunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import { adminReducer } from './reducers/adminReducer';
import { dashCategoryReducer } from './reducers/dashCategoryReducer';
import { dashTagReducer } from './reducers/dashTagReducer';
import { articalReducer } from './reducers/articalReducer';
import { homeReducer } from './reducers/home/homeReducer';
import { likeDislikeReducer } from './reducers/home/likeDislikeReducer';
import { homeCommentReducer } from './reducers/home/homeCommentReducer';

import { dashboardReducer } from './reducers/dashboardIndexReducer';

const rootReducer = combineReducers({
  adminReducer,
  dashboradCategory: dashCategoryReducer,
  dashboradTag: dashTagReducer,
  dashboradArtical: articalReducer,
  homeReducer,
  likeDislike: likeDislikeReducer,
  userComment: homeCommentReducer,
  dashboardIndex:dashboardReducer
});

const middleware = [ThunkMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  devTools: process.env.NODE_ENV !== 'production', // or use your own condition
});

export default store;
