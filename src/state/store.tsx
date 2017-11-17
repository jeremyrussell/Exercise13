import { Post } from "./actions"

export interface SpiceStoreState {
	spiceLevel?: number
}

export interface PostStoreState {
	fetching: boolean
	list?: Post[]
}

export interface StoreState extends SpiceStoreState { posts: PostStoreState }
