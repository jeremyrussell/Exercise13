import { SetDisplayString, setDisplayStringAction } from "./actions"

export const SET_DISPLAY_STRING = "SET_DISPLAY_STRING"
export type SET_DISPLAY_STRING = typeof SET_DISPLAY_STRING

export const OTHER = "OTHER"
export type OTHER = typeof OTHER

export interface HelloWorldStateProperties {
	displayString?: string
}

export interface HelloWorldDispatchProperties {
	// setDisplayStringAction(displayString: string): SetDisplayString
	setDisplayStringAction?: typeof setDisplayStringAction
}

export interface HelloWorldProperties extends HelloWorldStateProperties, HelloWorldDispatchProperties {}
