# useCallback no REACT NATIVE

O useCallback é um hook do React e React Native usado para memorizar funções e otimizar o desempenho de componentes, especialmente quando essas funções são passadas como props para outros componentes ou utilizadas em dependências de hooks.

### Exemplo

_*Example.tsx*_

```typescript
import { useCallback, useState } from "react";
import { View, Text, Button } from "react-native";
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";

export function Example() {
    const [result, setResult] = useState(0);
    const [x, setX] = useState<number | null>(null);
    const [y, setY] = useState<number | null>(null);

    const mult = useCallback((x: number, y: number) => {
        setResult(x * y);
    }, []);

    const handleMultValues = () => {
        if (x !== null && y !== null) {
            mult(x, y);
        }
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View>
                <TextInput
                    placeholder='informe o valor do X'
                    keyboardType='numeric'
                    onChangeText={(value) => setX(Number(value))}
                />
                <TextInput
                    placeholder='informe o valor do Y'
                    keyboardType='numeric'
                    onChangeText={(value) => setY(Number(value))}
                />
                <Button title='Multiplicar' onPress={handleMultValues} />
                <Text>Result: {result}</Text>
            </View>
        </GestureHandlerRootView>
    );
}
```

_*index.tsx*_

```typescript
import { Example } from "@/components/Example";
import { StyleSheet, SafeAreaView, Text } from "react-native";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.box}>
            <Text>Teste</Text>
            <Example />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    box: {
        margin: 30,
    },
});
```
