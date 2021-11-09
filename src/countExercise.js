import React from "react";
import NumericInput from 'react-numeric-input';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//     welcome_text: {
//         justifyContent: 'center'
//     }
// }));

const card = (
    <React.Fragment>
        <CardContent>

        </CardContent>
        <CardActions align="center">

        </CardActions>
    </React.Fragment>
);

class CountExercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstNumber: generateRandomNumber(100), secondNumber: generateRandomNumber(100), userAnswer:0, correctAnswer : false};
        this.baseState = this.state
    }

    render() {

        const correctAnswer = this.state.correctAnswer;

        const handleUserAnswerSubmit = (event) => {
            event.preventDefault();
            console.log("summ "+ (this.state.firstNumber + this.state.secondNumber))
            console.log("ua "+ this.state.userAnswer)
            if ((this.state.firstNumber + this.state.secondNumber) == this.state.userAnswer){
                // alert("Your answer is correct")
                this.setState({correctAnswer : true})
            }else {
                // this.render(<Alert severity="error">Your answer is incorrect, try again</Alert>)
                alert("Your answer is incorrect")

            }
        };
        const resetState = () => {
            this.setState({firstNumber: generateRandomNumber(100), secondNumber: generateRandomNumber(100), userAnswer:0, correctAnswer : false})
        };
        if (!this.state.correctAnswer){
            return <>
                <div align="center">
                    <Typography variant="h3" >
                        Welcome to SOWISO counting exercise<br/>In this exercise you have to count the sum of two numbers
                        <br/>{this.state.firstNumber} + {this.state.secondNumber}  = <br/>
                    </Typography>
                    <form onSubmit={handleUserAnswerSubmit}>
                        <label>Enter your answer:
                            <input
                                type="number"
                                onChange={(e) => this.setState({userAnswer : e.target.value})}
                            />
                        </label>
                        <input type="submit" value="Submit answer"/>
                    </form>
                </div>
            </>
        }
        return <>
            <div align="center">
                <Typography variant="h3" component="div">
                    Congratulations!<br/>
                    Your answer is correct
                </Typography>
                <Button onClick={() => resetState()}>Try again</Button>
            </div>
            </>

    }
}

class CongratsComponent extends React.Component {
    render() {
        return <>

            </>
    }
}

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

export default (CountExercise)
