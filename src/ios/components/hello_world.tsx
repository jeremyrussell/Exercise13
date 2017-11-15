/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from "react"
import {
	Platform,
	StyleSheet,
	Text,
	View
} from "react-native"
import { HelloWorldProperties } from "../../common/state/types"

export default class HelloWorld extends React.Component<HelloWorldProperties, any> {
	componentDidMount() {
		setTimeout(() => {
			this.props.setDisplayStringAction && this.props.setDisplayStringAction("hello world!")
		}, 1000)
	}
	render() {
		const displayString = this.props.displayString || "Waiting ..."
		return (
			<View style={styles.container}>
				<Text style={styles.instructions}>
					{displayString}
				</Text>
			</View>
		)
	}
}

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
