# Props no REACT NATIVE

As propriedades são utilizadas para deixar o nosso componente dinâmico e também para trafegar informações entre componentes.

### Exemplo

_*Example.tsx*_

```typescript
import { View, Text } from "react-native";

type ExampleProps = {
    text: string;
    children?: string;
};

export function Example({ text, children }: ExampleProps) {
    return (
        <View>
            <Text>{children}</Text>
            <Text>{text}</Text>
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
            <Example text='depois na minha mão'>Pega esse titulo</Example>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    box: {
        margin: 30,
    },
});
```
