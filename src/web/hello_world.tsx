import * as React from "react"
import * as ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"

import { hello } from "../common/state/reducer"
import { StoreState } from "../common/state/store"
import HelloWorld from "./containers/hello_world"

const store = createStore<StoreState>(hello, {})

ReactDOM.render(
	<Provider store={store}>
		<HelloWorld />
	</Provider>,
	document.getElementById("root") as HTMLElement
)
