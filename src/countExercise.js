import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
class CountExercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstNumber: generateRandomNumber(100), secondNumber: generateRandomNumber(100), userAnswer:0, correctAnswer : false};
    }

    render() {
        const handleUserAnswerSubmit = (event) => {
            event.preventDefault();
            console.log("summ "+ (this.state.firstNumber + this.state.secondNumber))
            console.log("ua "+ this.state.userAnswer)

            if ((this.state.firstNumber + this.state.secondNumber) === parseInt(this.state.userAnswer)){
                this.setState({correctAnswer : true})
            }else {
                alert("Your answer is incorrect, try again")
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
function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

export default (CountExercise)
