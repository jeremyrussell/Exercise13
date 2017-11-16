import { INCREMENT_SPICE_LEVEL, DECREMENT_SPICE_LEVEL, RETRIEVE_POSTS } from "./types"

// export interface SetDisplayString {
// 	type: SET_DISPLAY_STRING
// 	displayString: string
// }
// export interface Other {
// 	type: OTHER
// }

// export type DisplayAction = SetDisplayString | Other

// export function setDisplayStringAction(displayString: string): SetDisplayString {
// 	return {
// 		type: SET_DISPLAY_STRING,
// 		displayString: displayString
// 	}
// }

export interface IncrementSpiceLevel {
	type: INCREMENT_SPICE_LEVEL
}

export interface DecrementSpiceLevel {
	type: DECREMENT_SPICE_LEVEL
}

export type SpiceLevelAction = IncrementSpiceLevel | DecrementSpiceLevel

export function incrementSpiceLevel(): IncrementSpiceLevel {
	return {
		type: INCREMENT_SPICE_LEVEL
	}
}

export function decrementSpiceLevel(): DecrementSpiceLevel {
	return {
		type: DECREMENT_SPICE_LEVEL
	}
}

export interface Post {
	id: number,
	title: string,
	body: string
}

export interface RetrievePosts {
	type: RETRIEVE_POSTS
	posts?: Post[]
}

export type PostsAction = RetrievePosts

export function retrievePosts(): RetrievePosts {
	let posts: Post[] = [
		{
			id: 1,
			title: "asdf",
			body: "fdsa"
		}
	]
	return {
		type: RETRIEVE_POSTS,
		posts: posts
	}
}
