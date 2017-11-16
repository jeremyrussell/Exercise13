import * as React from "react"
import * as ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"

import { spice } from "../state/reducer"
import { StoreState } from "../state/store"
import Container from "../containers/spicy_meme_container"
import Component from "./components/spicy_meme_presentation"

const store = createStore<StoreState>(spice, {spiceLevel: 1})

const SpicyMeme = Container(Component)

ReactDOM.render(
	<Provider store={store}>
		<SpicyMeme />
	</Provider>,
	document.getElementById("root") as HTMLElement
)