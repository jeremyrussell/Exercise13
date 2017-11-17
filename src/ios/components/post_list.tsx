import * as React from "react"
import {
	Platform,
	StyleSheet,
	Text,
	View,
	FlatList
} from "react-native"
import { PostsStateProperties } from "../../containers/posts_container"
import { text } from "../../text"

const PostList: React.StatelessComponent<PostsStateProperties> = (props) => {
	return (
		<View>
			<View style={styles.heading}>
				<Text style={styles.headingText}>{text.posts}</Text>
			</View>
			<FlatList
				data={props.list || []}
				renderItem={({item}) =>
					<View
						key={item.id}
						style={styles.item}
					>
						<Text style={styles.itemText}>{text.title} {item.title}</Text>
						<Text style={styles.itemText}>{text.body} {item.body}</Text>
					</View>}
			/>
		</View>
	)
}

export default PostList

const styles = StyleSheet.create({
	heading: {
		paddingTop: 20,
		justifyContent: "center",
		alignItems: "center"
	},
	headingText: {
		fontWeight: "600",
		fontSize: 24
	},
	item: {
		borderBottomWidth: 1,
	},
	itemText: {
		paddingBottom: 10
	}
})
