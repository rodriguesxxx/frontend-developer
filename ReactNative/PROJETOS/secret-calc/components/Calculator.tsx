import { useCalc } from "@/hooks/useCalc";
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, SafeAreaView } from "react-native";

const { width, height } = Dimensions.get("window");
const isSmallDevice = width < 360;

export function Calculator() {
    const { buttons, operation, result, handleButton } = useCalc();

    return (
        <View>
            <View style={styles.result}>
                <Text style={styles.textOperation}>{operation}</Text>
                <Text style={styles.textResult}>{result}</Text>
            </View>
            <View style={styles.buttons}>
                {buttons.map((button) => (
                    <TouchableOpacity style={styles.button} key={button} onPress={() => handleButton(button)}>
                        <Text style={styles.textButton}>{button}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    result: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "100%",
        height: 320,
        backgroundColor: "#e7e7e7",
        padding: 10,
    },
    buttons: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignContent: "center",
    },
    button: {
        width: isSmallDevice ? width / 5 - 10 : width / 4 - 10,
        height: isSmallDevice ? height / 12 : height / 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 5,
        borderRadius: 5,
    },
    textButton: {
        fontSize: 25,
        color: "#5b5b5b",
    },
    textOperation: {
        fontSize: 22,
        marginBottom: 0,
        marginRight: 10,
        alignSelf: "flex-end",
    },
    textResult: {
        fontWeight: "400",
        fontSize: 80,
        margin: 10,
        alignSelf: "flex-end",
    },
});
