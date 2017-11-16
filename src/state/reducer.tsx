import { StoreState } from "./store"
import { INCREMENT_SPICE_LEVEL, DECREMENT_SPICE_LEVEL, RETRIEVE_POSTS } from "./types"
import { SpiceLevelAction, PostsAction } from "./actions"

export function spice(state: StoreState = {spiceLevel: 1}, action: SpiceLevelAction): StoreState {
	switch (action.type) {
		case INCREMENT_SPICE_LEVEL:
			return { ...state, spiceLevel: Math.min(5, state.spiceLevel + 1) }
		case DECREMENT_SPICE_LEVEL:
			return { ...state, spiceLevel: Math.max(1, state.spiceLevel - 1) }
	}
	return state
}

export function posts(state: StoreState, action: PostsAction): StoreState {
	switch (action.type) {
		case RETRIEVE_POSTS:
			return { ...state, posts: action.posts }
	}
	return state
}
