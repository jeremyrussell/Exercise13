import * as actions from "../state/actions"
import { StoreState } from "../state/store"
import { connect, Dispatch } from "react-redux"

export interface PostsStateProperties {
	posts?: actions.Post[]
}

export interface PostsDispatchProperties {
	retrievePosts?: typeof actions.retrievePosts
}

export interface PostsProperties extends PostsStateProperties, PostsDispatchProperties {}

export function mapStateToProps(props: StoreState) {
	return {
		posts: props.posts
	}
}

export function mapDispatchToProps(dispatch: Dispatch<actions.PostsAction>) {
	return {
		retrievePosts: () => dispatch(actions.retrievePosts())
	}
}

export default connect<PostsStateProperties, PostsDispatchProperties>(mapStateToProps, mapDispatchToProps)
