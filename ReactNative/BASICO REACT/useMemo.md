# useMemo no REACT NATIVE

O useMemo é um hook do React e React Native que é usado para memorizar valores computados e otimizar o desempenho de componentes. Ele previne a reexecução de cálculos caros ou complexos durante as renderizações, a menos que suas dependências tenham mudado.

### Exemplo

_*Example.tsx*_

```typescript
import { useCallback, useMemo, useState } from "react";
import { View, Text, Button } from "react-native";
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";

export function Example() {
    const [updateUsers, setUpdateUsers] = useState(false);

    const countUsers = useMemo(() => {
        if (updateUsers) {
            let sum = 0;
            for (let i = 0; i < 2 ** 9; i++) {
                sum += 1;
            }
            return sum;
        }
    }, [updateUsers]);

    const handleUpdateUsers = () => {
        setUpdateUsers(!updateUsers);
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View>
                <Button title='ATUALIZAR' onPress={handleUpdateUsers} />
                <Text>Usuários: {countUsers}</Text>
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
    result: {},
    buttons: {},
});
```
