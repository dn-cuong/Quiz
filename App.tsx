import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    View,
    Image,
    TouchableOpacity,
    Animated,
    ScrollView,
} from 'react-native';
import styles from './styles';

// Define question type
interface Question {
    question: string;
    image: any; // replace 'any' with a more specific type if possible
    answers: string[];
    correctAnswer: string;
    hint: string;
}

// Questions array
const questions: Question[] = [
    {
        question: "What is the output of the following code?",
        image: require('./assets/images/question1.png'),
        answers: ['A. "122"', 'B. "32"', 'C. "14"', 'D. "NaN"'],
        correctAnswer: 'A. "122"',
        hint: "Hint: Think about how JavaScript handles different data types",
    },
    {
        question: "What is the output of the following code?",
        image: require('./assets/images/question2.png'),
        answers: ['A. "122"', 'B. "10"', 'C. "1"', 'D. "NaN"'],
        correctAnswer: 'B. "10"',
        hint: "Hint: Think about how JavaScript handles different data types",
    },
];

const App = (): React.JSX.Element => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
    const [popUpVisible, setPopUpVisible] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const animationValue = useState(new Animated.Value(0))[0];
    const progressBarWidth = useState(new Animated.Value(0))[0];

    // Animate progress bar width based on correct answers
    useEffect(() => {
        Animated.timing(progressBarWidth, {
            toValue: (correctAnswersCount / questions.length) * 100,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [correctAnswersCount]);

    // Handle answer selection
    const handleSelectAnswer = (answer: string) => {
        setSelectedAnswer(answer);
    };

    // Handle the submission of the answer
    const handleSubmit = () => {
        const currentQuestion = questions[currentQuestionIndex];
        const isAnswerCorrect = selectedAnswer === currentQuestion.correctAnswer;

        setIsCorrect(isAnswerCorrect);
        setPopUpVisible(true);
        setCorrectAnswersCount((prev) => prev + (isAnswerCorrect ? 1 : 0));

        Animated.timing(animationValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    // Move to the next question
    const handleNextQuestion = () => {
        if (isCorrect && currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        resetState();
    };

    // Reset state for the next question
    const resetState = () => {
        setPopUpVisible(false);
        animationValue.setValue(0);
        setSelectedAnswer(null);
    };

    // Get current question details
    const { question, image, answers } = questions[currentQuestionIndex];

    // Interpolated scale and opacity values for animation
    const scale = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    const opacity = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    // Determine button text color based on answer correctness
    const popUpButtonTextColor = isCorrect ? '#4CAF50' : '#EC7878';

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#1E1E1E" />

            {popUpVisible && (
                <View style={styles.overlay}>
                    <Animated.View style={[
                        styles.popUpContainer,
                        {
                            backgroundColor: isCorrect ? '#4CAF50' : '#EC7878',
                            transform: [{ scale }],
                            opacity,
                        }
                    ]}>
                        <Image
                            source={
                                isCorrect
                                    ? require('./assets/images/correct.png')
                                    : require('./assets/images/incorrect.png')
                            }
                            style={styles.popUpImage}
                            resizeMode="contain"
                        />
                        <Text style={styles.popUpText}>
                            {isCorrect ? `Congratulations!` : `Oh no!`}
                        </Text>
                        <Text style={styles.popUpHintText}>
                            {isCorrect ? `You earned X Badge!` : questions[currentQuestionIndex].hint}
                        </Text>
                        <TouchableOpacity
                            style={styles.popUpButton}
                            onPress={handleNextQuestion}
                        >
                            <Text style={[styles.popUpButtonText, { color: popUpButtonTextColor }]}>
                                {isCorrect ? 'Continue' : 'Try Again'}
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            )}

            <View style={styles.header}>
                <View style={styles.circle} />
                <View style={styles.totalBox}>
                    <Text style={styles.boxText}>
                        {currentQuestionIndex + 1} / {questions.length}
                    </Text>
                </View>
            </View>

            {/* Adjusted ScrollView */}
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1 }} // Allow flex growth for scrolling
                keyboardShouldPersistTaps="handled" // Ensures taps on keyboard won't dismiss the ScrollView
            >
                <View style={styles.body}>
                    <View style={styles.progressBarContainer}>
                        <Animated.View
                            style={[styles.progressBar, {
                                width: progressBarWidth.interpolate({
                                    inputRange: [0, 100],
                                    outputRange: ['0%', '100%'],
                                }),
                            }]}
                        />
                    </View>

                    <Text style={styles.questionText}>{question}</Text>
                    <Image
                        source={image}
                        style={styles.questionImage}
                        resizeMode="contain"
                    />

                    <View style={styles.answerContainer}>
                        {answers.map((answer) => (
                            <TouchableOpacity
                                key={answer}
                                style={[
                                    styles.answerButton,
                                    selectedAnswer === answer && styles.selectedAnswerButton,
                                ]}
                                onPress={() => handleSelectAnswer(answer)}
                            >
                                <Text style={styles.answerText}>{answer}</Text>
                                <View style={styles.circleContainer}>
                                    <View style={[
                                        styles.innerCircle,
                                        selectedAnswer === answer && styles.selectedInnerCircle,
                                    ]} />
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TouchableOpacity
                        style={[
                            styles.submitButton,
                            !selectedAnswer && styles.disabledButton
                        ]}
                        onPress={handleSubmit}
                        disabled={!selectedAnswer}
                    >
                        <Text style={styles.submitText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
