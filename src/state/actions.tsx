import { INCREMENT_SPICE_LEVEL, DECREMENT_SPICE_LEVEL, REQUEST_POSTS, RECEIVE_POSTS } from "./types"
import { Dispatch } from "react-redux";

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

export interface RequestPosts {
	type: REQUEST_POSTS
}

export interface ReceivePosts {
	type: RECEIVE_POSTS
	posts?: Post[]
}

export type PostsAction = RequestPosts | ReceivePosts

export function receivePosts(posts: Post[]): ReceivePosts {
	return {
		type: RECEIVE_POSTS,
		posts: posts
	}
}

export function requestPosts(): RequestPosts {
	return {
		type: REQUEST_POSTS
	}
}

export function fetchPosts() {
	// Thunk middleware knows how to handle functions.
	// It passes the dispatch method as an argument to the function,
	// thus making it able to dispatch actions itself.

	return function(dispatch: Dispatch<PostsAction>) {
		// First dispatch: the app state is updated to inform
		// that the API call is starting.

		dispatch(requestPosts())

		// The function called by the thunk middleware can return a value,
		// that is passed on as the return value of the dispatch method.

		// In this case, we return a promise to wait for.
		// This is not required by thunk middleware, but it is convenient for us.

		return fetch("https://jsonplaceholder.typicode.com/posts")
		.then(
			response => response.json(),
			// Do not use catch, because that will also catch
			// any errors in the dispatch and resulting render,
			// causing a loop of 'Unexpected batch number' errors.
			// https://github.com/facebook/react/issues/6895
			error => console.log("An error occured.", error)
		)
		.then(json =>
			// We can dispatch many times!
			// Here, we update the app state with the results of the API call.

			dispatch(receivePosts(json))
		)
	}
}