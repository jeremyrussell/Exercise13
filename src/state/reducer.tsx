import { StoreState } from "./store"
import { INCREMENT_SPICE_LEVEL, DECREMENT_SPICE_LEVEL } from "./types"
import { SpiceLevelAction } from "./actions"

export function spice(state: StoreState, action: SpiceLevelAction): StoreState {
	switch (action.type) {
		case INCREMENT_SPICE_LEVEL:
			return { ...state, spiceLevel: Math.min(5, state.spiceLevel + 1) }
		case DECREMENT_SPICE_LEVEL:
			return { ...state, spiceLevel: Math.max(1, state.spiceLevel - 1) }
	}
	return state
}
