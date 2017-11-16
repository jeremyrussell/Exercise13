import * as React from "react"
import * as ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"

import { posts } from "../state/reducer"
import { StoreState } from "../state/store"
import Container from "../containers/posts_container"
import Component from "./components/post_list"

const store = createStore<StoreState>(posts, {spiceLevel: 1, posts: []})

const Posts = Container(Component)

ReactDOM.render(
	<Provider store={store}>
		<Posts />
	</Provider>,
	document.getElementById("root") as HTMLElement
)
