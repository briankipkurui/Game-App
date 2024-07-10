import { Text, StyleSheet } from "react-native"
import Colors from "../../contants/colors"


function InstructionText({ children, style }) {
    return <Text style={[styles.intructionText, style]}>{children}</Text>

}
export default InstructionText

const styles = StyleSheet.create({
    intructionText: {
        color: Colors.accent500,
        fontSize: 24
    },
})