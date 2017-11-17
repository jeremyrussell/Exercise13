import * as React from "react"
import { style } from "typestyle"

const heading = style({
	textAlign: "center"
})

interface HeadingProps {
	text: string
}

const Heading: React.StatelessComponent<HeadingProps> = (props) => {
	return (
		<h1 className={heading}>{props.text}</h1>
	)
}

export default Heading
