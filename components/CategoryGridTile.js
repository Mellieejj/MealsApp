import { View, Text, Pressable, StyleSheet, Platform } from 'react-native'

function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                android_ripple={{ color: '#ccc' }}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        overflow: Platform === 'android' ? 'hidden' : 'visible',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowRadius: 4,
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});