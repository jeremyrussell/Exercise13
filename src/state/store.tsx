import { Post } from "./actions"

export interface StoreState {
	spiceLevel: number
	posts?: Post[]
}
