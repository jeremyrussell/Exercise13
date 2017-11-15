import HelloWorld from "../components/hello_world"
import { HelloWorldStateProperties, HelloWorldDispatchProperties } from "../../common/state/types"
import * as actions from "../../common/state/actions"
import { StoreState } from "../../common/state/store"
import { connect, Dispatch } from "react-redux"

export function mapStateToProps({ displayString }: StoreState) {
	return {
		displayString
	}
}

export function mapDispatchToProps(dispatch: Dispatch<actions.DisplayAction>) {
	return {
		setDisplayStringAction: (displayString: string) => dispatch(actions.setDisplayStringAction(displayString))
	}
}

export default connect<HelloWorldStateProperties, HelloWorldDispatchProperties>(mapStateToProps, mapDispatchToProps)(HelloWorld)
