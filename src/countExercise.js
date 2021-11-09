import React from "react";
import NumericInput from 'react-numeric-input';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//     welcome_text: {
//         justifyContent: 'center'
//     }
// }));

class CountExercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstNumber: generateRandomNumber(100), secondNumber: generateRandomNumber(100), userAnswer:0};
    }

    render() {
        let userAnswerDraft = 0;
        return <>
            <div align="center">
        <Typography variant="h3" >
            Welcome to SOWISO counting exercise<br/>In this exercise you have to count the sum of two numbers
            <br/>{this.state.firstNumber} + {this.state.secondNumber}  = <br/>
        </Typography>
                <form>
                    <label>Enter your answer:
                        <input
                            type="number"
                            // value={userAnswer}
                            onChange={(e) => this.setState({userAnswer : e.target.value})}
                        />
                    </label>
                    <input type="submit" value="Submit answer"/>
                </form>
            </div>
        </>
    }
}

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

export default (CountExercise)
