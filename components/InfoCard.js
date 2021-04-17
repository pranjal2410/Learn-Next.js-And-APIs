import {Paper, Card, Typography, makeStyles} from "@material-ui/core";
import simpleIcons from 'simple-icons';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '5%',
    }
}))

const InfoCard = () => {
    const classes = useStyles();
    return (
        <Paper elevation={5} className={classes.paper}>
            <Typography variant='h4' component='h1' color='textPrimary'>
                Hey everyone!
                It's been a while since I started
                learning Framer motion.
                I like to add transitions and
                animations in my projects and I
                found out that Framer motion gives the
                best kind of animation you will ever
                need. Here you can click on the arrow
                buttons to navigate between images
                and click on the change animation
                button to change the type of animation.
            </Typography>
        </Paper>
    )
}

export default InfoCard;