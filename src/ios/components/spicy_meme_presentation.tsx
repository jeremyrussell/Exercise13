import * as React from "react"
import {
	Platform,
	StyleSheet,
	Text,
	View
} from "react-native"
import { HelloWorldProperties } from "../../containers/spicy_meme_container"
import ImageView from "./spicy_meme_image_view"
import Stepper from "./spice_stepper_presentation"
import { text } from "../../text"

const SpicyMeme: React.StatelessComponent<HelloWorldProperties> = (props) => {
	return (
		<View style={styles.container}>
			<ImageView spiceLevel={props.spiceLevel} />
			<Text style={styles.instructions}>{text.label}</Text>
			<Stepper value={props.spiceLevel} increment={props.incrementSpiceLevel} decrement={props.decrementSpiceLevel} />
		</View>
	)
}

export default SpicyMeme

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5
	}
})
