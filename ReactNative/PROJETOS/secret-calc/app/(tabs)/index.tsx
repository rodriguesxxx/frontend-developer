import { Calculator } from "@/components/Calculator";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <Calculator />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
