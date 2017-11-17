import * as React from "react"
import { Post } from "../../state/actions"
import Item from "./post_list_item"

interface ListProps {
	list?: Post[]
}

// Todo: how to remove div wrapping
const Items: React.StatelessComponent<ListProps> = (props) => {
	if (!props.list || props.list.length === 0) return null
	return (
		<div>
			{props.list.map((post) => <Item key={post.id} details={post} />)}
		</div>
	)
}

export default Items
