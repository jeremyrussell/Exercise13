import * as actions from "../state/actions"
import { StoreState } from "../state/store"
import { connect, Dispatch } from "react-redux"

export interface HelloWorldStateProperties {
	spiceLevel?: number
}

export interface HelloWorldDispatchProperties {
	incrementSpiceLevel?: typeof actions.incrementSpiceLevel
	decrementSpiceLevel?: typeof actions.decrementSpiceLevel
}

export interface HelloWorldProperties extends HelloWorldStateProperties, HelloWorldDispatchProperties {}

export function mapStateToProps(state: number): HelloWorldStateProperties {
	return {
		spiceLevel: state
	}
}

export function mapDispatchToProps(dispatch: Dispatch<actions.SpiceLevelAction>) {
	return {
		incrementSpiceLevel: () => dispatch(actions.incrementSpiceLevel()),
		decrementSpiceLevel: () => dispatch(actions.decrementSpiceLevel())
	}
}

export default connect<HelloWorldStateProperties, HelloWorldDispatchProperties>(mapStateToProps, mapDispatchToProps)
