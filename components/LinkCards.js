import {Paper, CardActionArea, makeStyles, Grid, CardHeader, CardContent, Typography} from "@material-ui/core";
import {cards} from "./cards.json";

const useStyles = makeStyles((theme) => ({
    card: {
        margin: '1rem',
        flexBasis: '45%',
        padding: '1.5rem',
        textAlign: 'left',
        textDecoration: 'none',
        border: '1px solid #eaeaea',
        borderRadius: '10px',
        transition: 'color 0.15s ease, border-color 0.15s ease',
        '&:hover, &:active, &:focus': {
            color: theme.palette.type === 'light'?'#0070f3': '#00c0ff',
            borderColor: theme.palette.type === 'light'?'#0070f3': '#00c0ff'
        },
        '& p': {
            margin: 0,
            fontSize: '1.25rem',
            lineHeight: '1.5'
        },
        '& h3': {
            margin: '0 0 1rem 0',
            fontSize: '1.5rem'
        }
    }
}))

const LinkCards = () => {
    const classes = useStyles();

    return (
        <>
            {cards.map((card, i) => {
                return (
                    <Grid item key={i} xs>
                        <Paper className={classes.card} elevation={5}>
                            <a href={card.url}>
                                <CardHeader
                                    title={card.title}
                                />
                                <CardContent>
                                    <Typography variant='h5' component='h1'>
                                        {card.content}
                                    </Typography>
                                </CardContent>
                            </a>
                        </Paper>
                    </Grid>
                )
            })}
        </>
    )
}

export default LinkCards;
