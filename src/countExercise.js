import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";

// const useStyles = makeStyles((theme) => ({
//     welcome_text: {
//         justifyContent: 'center'
//     }
// }));

class CountExercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstNumber: generateRandomNumber(100), secondNumber: generateRandomNumber(100)};
    }

    render() {
        return (
        <Typography variant="h3" align="center">
            Welcome to SOWISO counting exercise<br/>In this exercise you have to count the sum of two numbers
            <br/>{this.state.firstNumber} + {this.state.secondNumber}
        </Typography>
        );
    }
}

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

export default (CountExercise)
