import * as React from "react"
import * as ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"

import { spiceLevel } from "../state/reducers"
import { StoreState } from "../state/store"
import Container from "../containers/spicy_meme_container"
import Component from "./components/spicy_meme_presentation"

const store = createStore<number>(spiceLevel)

const SpicyMeme = Container(Component)

const App: React.StatelessComponent = () => {
	return (
		<Provider store={store}>
			<SpicyMeme />
		</Provider>
	)
}

export default App
