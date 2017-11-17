import { SpiceStoreState, PostStoreState } from "./store"
import { INCREMENT_SPICE_LEVEL, DECREMENT_SPICE_LEVEL, REQUEST_POSTS, RECEIVE_POSTS } from "./types"
import { SpiceLevelAction, Post, PostsAction } from "./actions"

export function spiceLevel(state: number = 1, action: SpiceLevelAction): number {
	switch (action.type) {
		case INCREMENT_SPICE_LEVEL:
			return Math.min(5, state + 1)
		case DECREMENT_SPICE_LEVEL:
			return Math.max(1, state - 1)
	}
	return state
}

export function posts(state: PostStoreState = {fetching: false}, action: PostsAction): PostStoreState {
	switch (action.type) {
		case REQUEST_POSTS:
			return {...state, fetching: true}
		case RECEIVE_POSTS:
			return {fetching: false, list: action.posts}
	}
	return state
}
