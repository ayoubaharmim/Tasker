import CheckBox from "@react-native-community/checkbox";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTCOLORS } from "../constants";
import Icon from 'react-native-vector-icons/FontAwesome5';

type TaskProps = {
    title: string;
    isDone: boolean;
    category: string;
    date?: string;
    time?: string;
}

function renderDate(date: string | undefined) {
    if(date)
    return(
        <View style={styles.dateTime}>
            <Icon name="calendar" style={styles.icon}/>
            <Text style={styles.timeText}>{date}</Text>
        </View>
    );
}

function renderTime(time: string | undefined) {
    if(time)
    return(
        <View style={styles.dateTime}>
            <Icon name="clock" style={styles.icon}/>
            <Text style={styles.timeText}>{time}</Text>
        </View>
    );
}

const Task = (props: TaskProps) => {
    return(
        <View style={styles.container}>
            <View style={styles.secondaryContainer}>
                <CheckBox style={styles.checkbox}/>
                <View style={styles.taskContainer}>
                    <Text style={styles.taskText}>{props.title}</Text>
                    <View style={styles.dateTimeContainer}>
                        {renderDate("test")}
                        {renderTime("time")}
                    </View>
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
    },
    dateTime: {
        flexDirection: 'row',
        marginLeft: 8,
        alignItems: 'center'
    },
    dateTimeContainer: {
        flexDirection: 'row',
    },
    timeText: {
        marginLeft: 8,
        fontSize: 15,
        color: FONTCOLORS.LIGHTGREY
    },
    icon: {
        color: FONTCOLORS.LIGHTGREY
    }
});

export default Task;