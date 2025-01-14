# useState no REACT NATIVE

o useEffect é utilizado para realizar efeitos colaterais em componentes, com ele é possível realizar consultas a APIs.

### Exemplo

_*Example.tsx*_

```typescript
import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

type ExampleProps = {
    text: string;
    children?: string;
};

export function Example({ text, children }: ExampleProps) {
    const [showChildren, setShowChildren] = useState(false);
    const [btnText, setBtnText] = useState("Mostrar");

    //QUANDO SE UTILIZA O useEffect sem passar um [], toda vez que o componente for carregado/atualizado/destruido será executado a function do useEffect
    useEffect(() => {
        console.log("ISSO é não é perfomático");
    });

    useEffect(() => {
        console.log("Passarei aqui apenas uma vez!");
    }, []);

    //O useEffect pode ser usado para tomar uma ação apenas quando o estado de um determinado objeto mudar.
    useEffect(() => {
        if (showChildren) {
            setBtnText("Ocultar");
        } else {
            setBtnText("Mostrar");
        }
    }, [showChildren]);

    const handleButton = () => {
        setShowChildren(!showChildren);
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
