import * as React from "react"
import { style } from "typestyle"
import { Post } from "../../state/actions"
import { text } from "../../text"

const post = style({
	$nest: {
		"&:not(:first-child)": {
			borderTop: "solid 1px"
		}
	}
})

interface PostProps {
	details: Post
}

const Items: React.StatelessComponent<PostProps> = (props) => (
	<div className={post}>
		<p>{text.title} {props.details.title}</p>
		<p>{text.body} {props.details.body}</p>
	</div>
)

export default Items
