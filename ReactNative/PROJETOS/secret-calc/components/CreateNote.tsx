import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    NativeSyntheticEvent,
    TextInputChangeEventData,
    Button,
} from "react-native";
export function CreateNote() {
    const [titleNoteValue, setTitleNoteValue] = useState("");
    const [noteValue, setNoteValue] = useState("");

    const handleOnChangeTitleNoteInput = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setTitleNoteValue(e.nativeEvent.text);
    };

    const handleOnChangeNoteInput = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setNoteValue(e.nativeEvent.text);
    };

    const handleButtonSalvar = () => {
        console.log(titleNoteValue);
    };

    return (
        <View>
            <View>
                <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 10, textAlign: "center" }}>Titulo</Text>
                <TextInput style={styles.input} value={titleNoteValue} onChange={handleOnChangeTitleNoteInput} />
            </View>
            <View style={{ margin: 10 }}>
                <Button onPress={handleButtonSalvar} title='Adicionar' />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: "#e7e7e7",
    },
});
