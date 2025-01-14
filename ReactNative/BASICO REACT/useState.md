# useState no REACT NATIVE

O useState é utilizado para gerenciar o estado de objetos.

### Exemplo

_*Example.tsx*_

```typescript
import { useState } from "react";
import { View, Text, Button } from "react-native";

type ExampleProps = {
    text: string;
    children?: string;
};

export function Example({ text, children }: ExampleProps) {
    const [showChildren, setShowChildren] = useState(false);
    const [btnText, setBtnText] = useState("Mostrar");

    const handleButton = () => {
        setShowChildren(!showChildren);
        console.log(showChildren);
        if (showChildren) {
            setBtnText("Ocultar");
        } else {
            setBtnText("Mostrar");
        }
    };

    return (
        <View>
            <Text>{text}</Text>
            {children && <Button title={btnText} onPress={handleButton}></Button>}
            {showChildren && <Text>{children}</Text>}
        </View>
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
            <Example text='Seila irmão' />
            <Example text='Isso não faz sentido'>Ocult day</Example>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    box: {
        margin: 30,
    },
});
```
