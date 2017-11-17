import * as React from "react"
import * as ReactDOM from "react-dom"
import thunkMiddleware from "redux-thunk"
import { createLogger } from "redux-logger"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from "react-redux"

import { spiceLevel, posts } from "../state/reducers"
import { StoreState } from "../state/store"
import Container from "../containers/posts_container"
import Component from "./components/post_list"
import { fetchPosts } from "../state/actions"

const loggerMiddleware = createLogger()

const rootReducer = combineReducers<StoreState>({spiceLevel, posts})
const store = createStore<StoreState>(
	rootReducer,
	// {spiceLevel: 1, fetching: false, posts: []},
	applyMiddleware(
		thunkMiddleware, // lets us dispatch() functions
		loggerMiddleware // neat middleware that logs actions
	)
)
store.dispatch(fetchPosts())

const Posts = Container(Component)

const App: React.StatelessComponent = () => {
	return (
		<Provider store={store}>
			<Posts />
		</Provider>
	)
}

export default App
