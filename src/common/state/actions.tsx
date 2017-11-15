import { SET_DISPLAY_STRING, OTHER } from "./types"

export interface SetDisplayString {
	type: SET_DISPLAY_STRING
	displayString: string
}
export interface Other {
	type: OTHER
}

export type DisplayAction = SetDisplayString | Other

export function setDisplayStringAction(displayString: string): SetDisplayString {
	return {
		type: SET_DISPLAY_STRING,
		displayString: displayString
	}
}
