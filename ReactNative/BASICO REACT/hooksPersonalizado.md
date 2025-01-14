# hooks no REACT NATIVE

Os hooks personalizados são utilizados para encapsular o código, e seperar a "tela" da parte lógica.

### Exemplo

_*useCalc.ts*_

```typescript
import { useMemo, useState } from "react";

export const useCalc = () => {
    const buttons = useMemo(() => {
        return ["AC", "DEL", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "3", "2", "1", "+", "0", ".", "√", "="];
    }, []);

    const [operation, setOperation] = useState("2 + 2 =");
    const [result, setResult] = useState("4");

    const handleButton = (btn: string) => {
        setResult("");

        if (btn === "AC") {
            setOperation("");
        }
        if (btn === "DEL") {
            setOperation(operation.substring(0, operation.length - 1));
        }
        if (btn === ".") {
            let newOp = operation.substring(0, operation.length - 2);

            if (newOp[-1] !== ".") {
                newOp += ".";
                setOperation(newOp);
            }
        }
    };

    return {
        buttons,
        operation,
        result,
        handleButton,
    };
};
```

_*index.tsx*_

```typescript
import { useCalc } from "@/hooks/useCalc";
import { useMemo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, SafeAreaView } from "react-native";

const { width, height } = Dimensions.get("window");
const isSmallDevice = width < 360;

export default function HomeScreen() {
    const { buttons, operation, result, handleButton } = useCalc();

    return (
        <SafeAreaView>
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
        </SafeAreaView>
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
```
