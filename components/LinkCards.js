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
    }
}))

const LinkCards = () => {
    const classes = useStyles();

    return (
        <Grid container direction="row">
            {cards.map((card, i) => {
                return (
                    <Grid item key={i} xs={12} md={4} lg={4}>
                        <a href={card.url}>
                            <Paper className={classes.card} elevation={5}>
                                <Typography variant='h6' component='h3' style={{ margin: '0 0 1rem 0', fontSize: '1.5rem'}}>
                                    {card.title}
                                </Typography>
                                <Typography variant='body1' component='p'>
                                    {card.content}
                                </Typography>
                            </Paper>
                        </a>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default LinkCards;
