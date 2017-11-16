import * as React from "react"
import {
	StyleSheet,
	Image
} from "react-native"

interface ImageViewProps {
	spiceLevel?: number
}

const IMAGES = [
	require("../../../src/images/spicy_1.png"),
	require("../../../src/images/spicy_2.png"),
	require("../../../src/images/spicy_3.png"),
	require("../../../src/images/spicy_4.png"),
	require("../../../src/images/spicy_5.png")
]

const ImageView: React.StatelessComponent<ImageViewProps> = (props) => {
	let imageIndex = props.spiceLevel ? props.spiceLevel - 1 : 0
	return (
		<Image source={IMAGES[imageIndex]} style={styles.image} resizeMode="cover" />
	)
}

export default ImageView

const styles = StyleSheet.create({
	image: {
		height: 230,
		width: 300
	}
})
