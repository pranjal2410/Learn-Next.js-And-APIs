import {Paper, Card, Typography, makeStyles, Grid} from "@material-ui/core";
import simpleIcons from 'simple-icons';
import React from "react";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '3%',
        margin: '5%',
        textAlign: 'center',
    },
    title: {
        margin: '0',
        lineHeight: '1.15',
        fontSize: '4rem',
        textAlign: 'center',
        '& a': {
            color: theme.palette.type === 'light'?'#0070f3' : '#00c0ff',
            textDecoration: 'none',
        },
        '& a:hover, & a:focus, & a:active': {
            textDecoration: 'underline'
        }
    }
}))

const InfoCard = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column">
            <Grid item xs={12}>
                <h1 className={classes.title}>
                    Welcome to a demo of Framer motion and <br/><a href="https://nextjs.org">Next.js</a>
                </h1>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={5} className={classes.paper}>
                    <Typography variant='h5' component='h1' color='textPrimary'>
                        Hey everyone!
                        It's been a while since I started
                        learning Framer motion.
                        I like to add transitions and
                        animations in my projects and I
                        found out that Framer motion gives the
                        best kind of animation you will ever
                        need. You can use the slider to change
                        the image and see it roll.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default InfoCard;