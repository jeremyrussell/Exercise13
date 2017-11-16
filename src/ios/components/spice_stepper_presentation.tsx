import * as React from "react"
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet
} from "react-native"
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
		<View style={styles.stepper}>
			<TouchableHighlight onPress={props.decrement}>
				<Text>{text.decrement}</Text>
			</TouchableHighlight>
			<Text> {props.value} </Text>
			<TouchableHighlight onPress={props.increment}>
				<Text>{text.increment}</Text>
			</TouchableHighlight>
		</View>
	)
}

export default Stepper

const styles = StyleSheet.create({
	stepper: {
		flexDirection: 'row'
	}
})
