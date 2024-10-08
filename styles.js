// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    header: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    totalBox: {
        width: 100,
        paddingLeft: 10,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    boxText: {
        fontSize: 16,
        fontFamily: 'Arial Rounded MT Bold',
        color: '#fff',
    },
    body: {
        marginTop: 30,
        padding: 16,
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#1E1E1E',
    },
    progressBarContainer: {
        height: 25,
        backgroundColor: '#FFFCF2',
        borderRadius: 30,
        marginBottom: 50,
        marginHorizontal: 16,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#94dd26',
        borderRadius: 30,
    },
    questionText: {
        fontSize: 20,
        fontFamily: 'Arial Rounded MT Bold',
        color: '#fff',
        marginBottom: 50,
        textAlign: 'center',
    },
    questionImage: {
        width: '100%',
        height: 150,
        marginBottom: 50,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 30,
    },
    answerContainer: {
        width: '100%',
        marginBottom: 20,
    },
    answerButton: {
        backgroundColor: '#CCC5B9',
        borderRadius: 30,
        padding: 15,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    selectedAnswerButton: {
        backgroundColor: '#FF8C00',
    },
    circleContainer: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    selectedInnerCircle: {
        backgroundColor: '#EB5E28',
        borderWidth: 2,
        borderColor: '#fff',
    },
    answerText: {
        fontSize: 16,
        color: '#1E1E1E',
        fontFamily: 'Arial Rounded MT Bold',
        flex: 1,
    },
    submitButton: {
        backgroundColor: '#EB5E28',
        borderRadius: 30,
        padding: 15,
        alignItems: 'center',
        width: '100%',
    },
    disabledButton: {
        backgroundColor: '#CCCCCC',
    },
    submitText: {
        fontSize: 30,
        color: '#fff',
        fontFamily: 'Arial Rounded MT Bold',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    popUpContainer: {
        width: '80%',
        padding: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    popUpImage: {
        width: 100,
        height: 100,
    },
    popUpText: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Arial Rounded MT Bold',
        marginBottom: 10,
    },
    popUpHintText: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'Arial Rounded MT Bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    popUpButton: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 10,
        width: '80%',
        alignItems: 'center',
    },
    popUpButtonText: {
        fontSize: 16,
        fontFamily: 'Arial Rounded MT Bold',
    },
});

export default styles;