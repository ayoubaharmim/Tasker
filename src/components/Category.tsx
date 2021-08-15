import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { COLORS, FONTCOLORS } from '../constants';

type CategoryProps = {
    title: string,
    numberOfTasks: string,
    cardColor?: string
}

const Category = (props: CategoryProps) => {
    return(
        <TouchableOpacity style={[styles.container]}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.numberOfTasksStyle}>{props.numberOfTasks}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.PURPLE,
        height: 90,
        marginHorizontal: 12,
        borderRadius: 23,
        justifyContent: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: FONTCOLORS.WHITE
    },
    numberOfTasksStyle: {
        fontSize: 16,
        color: FONTCOLORS.WHITE
    },
    textContainer: {
        marginLeft: 12,
        height: '60%',
        justifyContent: 'space-between'
    }
});

export default Category;
