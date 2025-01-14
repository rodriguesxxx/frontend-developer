import { CreateNote } from "@/components/CreateNote";
import { Notes } from "@/components/Notes";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function NotesScreen() {
    return (
        <SafeAreaView style={styles.screen}>
            <Text style={{ textAlign: "center", fontSize: 30 }}>Notas Secretas</Text>

            <CreateNote />
            <Notes />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        margin: 10,
    },
    input: {
        backgroundColor: "#e7e7e7",
    },
});
