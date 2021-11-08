import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//     welcome_text: {
//         justifyContent: 'center'
//     }
// }));

function  CountExercise() {
    // const classes = useStyles()
    let a = generateRandomNumber(100)
    return<>
        <Typography variant="h3" align="center">
            Welcome to SOWISO counting exercise<br/>In this exercise you have to count the sum of two numbers<br/>{a}
        </Typography>

    </>
};

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

export default (CountExercise)
