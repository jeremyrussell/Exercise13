import * as actions from "../state/actions"
import { StoreState } from "../state/store"
import { connect, Dispatch } from "react-redux"

export interface PostsStateProperties {
	fetching?: boolean
	list?: actions.Post[]
}

export function mapStateToProps(state: StoreState): PostsStateProperties {
	return {
		fetching: state.posts.fetching,
		list: state.posts.list
	}
}

export default connect<PostsStateProperties>(mapStateToProps)
