import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	Modal,
} from "react-native";
import React, { useState } from "react";
import ShowTodo from "./ShowTodo";

const AddTodo = () => {
	const [toDos, setToDos] = useState([]);
	const [toDoText, setToDoText] = useState("");
	const [isModalVisible, setIsModalVisible] = useState(false);
	const handleAddTodo = () => {
		if (toDoText.length) {
			setToDos((prevTodo) => [toDoText, ...prevTodo]);
		}
		setToDoText("");
		setIsModalVisible(false);
	};
	const handleDeleteTodo = (todo) => {
		setToDos(() => {
			return toDos.filter((item) => item !== todo);
		});
	};
	return (
		<ScrollView>
			<Modal visible={isModalVisible} animationType="slide">
				<View style={styles.container}>
					<View style={styles.addContainer}>
						<TextInput
							onChangeText={(newText) => setToDoText(newText)}
							style={styles.inputField}
							placeholder="Your todo"
							defaultValue={toDoText}
						/>
						<TouchableOpacity style={styles.addBtn} onPress={handleAddTodo}>
							<Text style={{ color: "white" }}>ADD</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
			<ShowTodo
				handleDeleteTodo={handleDeleteTodo}
				toDos={toDos}
				modalOpen={setIsModalVisible}
			/>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: {
		paddingLeft: 20,
		paddingRight: 20,
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#17c904",
	},
	addContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	inputField: {
		padding: 10,
		width: "80%",
		borderWidth: 1,
		borderColor: "white",
		borderRadius: 5,
		fontSize: 16,
		color: "white",
	},
	addBtn: {
		backgroundColor: "#12a003",
		padding: 15,
		borderRadius: 5,
	},
});
export default AddTodo;
