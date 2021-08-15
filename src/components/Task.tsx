import CheckBox from "@react-native-community/checkbox";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";

type TaskProps = {
    title: string;
    isDone: boolean;
    category: string;
    date?: string;
    time?: string;
}

const Task = (props: TaskProps) => {
    return(
        <View style={styles.container}>
            <View style={styles.secondaryContainer}>
                <CheckBox style={styles.checkbox}/>
                <View style={styles.taskContainer}>
                    <Text style={styles.taskText}>{props.title}</Text>
                    <Text>Hello</Text>
                </View>
            </View>
            <View style={styles.category}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 12,
        justifyContent: 'space-between',
    },
    taskContainer: {

    },
    taskText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    checkbox: {
        width: 25,
        height: 25,
        marginRight: 12
    },
    category: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: COLORS.PURPLE
    },
    secondaryContainer: {
        flexDirection: 'row'
    }
});

export default Task;