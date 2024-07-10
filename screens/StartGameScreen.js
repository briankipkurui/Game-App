import { useState } from "react"
import { TextInput, View, StyleSheet, Alert, Text } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import Colors from "../contants/colors";
import Tittle from "../components/ui/Tittle";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/IntructionText";

function StartGameScreen({ onPickedNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');


    function numberInputHandler(entredText) {
        setEnteredNumber(entredText)
    }
    function resetInputHandler() {
        setEnteredNumber('')
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number',
                'Number has to be a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )

            return;
        }
        // console.log('valid number!')
        onPickedNumber(chosenNumber)
    }
    return (
        <View style={styles.rootContainer}>
            <Tittle>Guess My number</Tittle>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}
export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        marginTop: 36,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 8
    },
    intructionText: {
        color: Colors.accent500,
        fontSize: 24
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})