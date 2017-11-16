import * as React from "react"
import { HelloWorldProperties } from "../../containers/spicy_meme_container"
import ImageView from "./spicy_meme_image_view"
import Stepper from "./spice_stepper_presentation"
import { text } from "../../text"

const SpicyMeme: React.StatelessComponent<HelloWorldProperties> = (props) => {
	return (
		<div>
			<ImageView spiceLevel={props.spiceLevel} />
			<div>{text.label}</div>
			<Stepper value={props.spiceLevel} increment={props.incrementSpiceLevel} decrement={props.decrementSpiceLevel} />
		</div>
	)
}

export default SpicyMeme
