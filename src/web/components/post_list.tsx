import * as React from "react"
import { PostsProperties } from "../../containers/posts_container"
// import ImageView from "./spicy_meme_image_view"
// import Stepper from "./spice_stepper_presentation"
import { text } from "../../text"

const SpicyMeme: React.StatelessComponent<PostsProperties> = (props) => {
	return (
		<div>
			<div>{text.posts}</div>
		</div>
	)
}

export default SpicyMeme
