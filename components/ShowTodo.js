import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ShowTodo = ({ toDos, handleDeleteTodo, modalOpen }) => {
	return (
		<View style={styles.toDoContainer}>
			<TouchableOpacity style={styles.addBtn} onPress={() => modalOpen(true)}>
				<Text style={styles.addBtnText}>ADD TODO</Text>
			</TouchableOpacity>
			<Text style={styles.heading}>Your Todo</Text>

			{toDos.length ? (
				<View>
					{toDos.map((todo, index) => (
						<View key={index} style={styles.toDo}>
							<Text style={styles.toDoText}>{todo}</Text>
							<Button
								onPress={() => handleDeleteTodo(todo)}
								color="#d92232"
								title="Delete"
							/>
						</View>
					))}
				</View>
			) : (
				<Text style={styles.defaultMessage}>You don't have any todo.</Text>
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	toDoContainer: {
		marginTop: 30,
		padding: 20,
	},
	heading: {
		fontSize: 25,
		textAlign: "center",
		marginBottom: 10,
		color: "black",
		marginTop: 10,
	},
	toDo: {
		backgroundColor: "gray",
		marginBottom: 10,
		padding: 10,
		borderRadius: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	addBtn: {
		backgroundColor: "#12a003",
		padding: 15,
		borderRadius: 5,
	},
	addBtnText: {
		fontSize: 16,
		color: "white",
		textAlign: "center",
	},
	toDoText: {
		fontSize: 16,
		color: "white",
		paddingBottom: 5,
	},
	defaultMessage: {
		textAlign: "center",
		color: "red",
		fontSize: 16,
	},
});
export default ShowTodo;
