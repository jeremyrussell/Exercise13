import * as React from "react"

interface ImageViewProps {
	spiceLevel?: number
}

const ImageView: React.StatelessComponent<ImageViewProps> = (props) => (
	<img height={200} src={`images/spicy_${props.spiceLevel}.png`} />
)

export default ImageView
