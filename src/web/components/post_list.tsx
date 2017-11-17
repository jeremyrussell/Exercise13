import * as React from "react"
import { style } from "typestyle"

import { PostsStateProperties } from "../../containers/posts_container"
import Heading from "./post_list_heading"
import Items from "./post_list_items"
import { text } from "../../text"

const heading = style({
	textAlign: "center"
})

const PostsList: React.StatelessComponent<PostsStateProperties> = (props) => {
	return (
		<div>
			<Heading text={text.posts} />
			<Items list={props.list || []} />
		</div>
	)
}

export default PostsList
