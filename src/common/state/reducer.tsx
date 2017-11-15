import { StoreState } from "./store"
import { SET_DISPLAY_STRING } from "./types"
import { DisplayAction } from "./actions"

export function hello(state: StoreState, action: DisplayAction): StoreState {
	switch (action.type) {
		case SET_DISPLAY_STRING:
			return { ...state, displayString: action.displayString }
	}
	return state
}
