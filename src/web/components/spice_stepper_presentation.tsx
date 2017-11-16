import * as React from "react"
import { text } from "../../text"
import * as actions from "../../state/actions"

// Todo: is adding the ? cheating
interface StepperProps {
	value?: number
	decrement?: typeof actions.decrementSpiceLevel
	increment?: typeof actions.incrementSpiceLevel
}

// Todo: remove unnecessary div
const Stepper: React.StatelessComponent<StepperProps> = (props) => {
	return (
		<div>
			<span key="2" onClick={props.decrement}>{text.decrement}</span>
			<span key="3"> {props.value} </span>
			<span key="4" onClick={props.increment}>{text.increment}</span>
		</div>
	)
}

export default Stepper
