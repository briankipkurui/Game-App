import { Text, StyleSheet } from "react-native"
import Colors from "../../contants/colors"
function Tittle({ children }) {
    return <Text style={styles.tittle}>{children}</Text>
        
}
export default Tittle


const styles = StyleSheet.create({
    tittle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor:  Colors.accent500,
        padding: 12
    }
})