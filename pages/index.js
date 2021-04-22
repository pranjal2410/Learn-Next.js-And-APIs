import Head from 'next/head'
import InfoCard from "../components/InfoCard";
import styles from '../styles/Home.module.css';
import {ThemeContext} from "../components/themer";
import {ThemeProvider, CssBaseline, AppBar, Toolbar, IconButton, Grid, Typography, Avatar, Tooltip} from "@material-ui/core";
import {Brightness4, Brightness7} from "@material-ui/icons";
import React, {useContext} from "react";
import LinkCards from "../components/LinkCards";
import AnimatedImages from "../components/Animate";
import {techStack} from "../components/techStack.json";
import simpleIcons from "simple-icons";

export default function Home() {

    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
    <Grid container alignItems="center" justify="center" direction="column" style={{ display: "flex"}}>
        <Head>
            <title>Learning Next.js</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position="fixed" color="transparent" style={{ boxShadow: "none"}}>
                <Toolbar>
                    <IconButton edge="end" onClick={toggleTheme}>
                        {theme.palette.type === 'light'?<Brightness4/> : <Brightness7/>}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" alignItems="center" direction="column" style={{ padding: "5rem 0", flex: "1"}}>
                <InfoCard/>
                <AnimatedImages/>
                <LinkCards/>
            </Grid>

            <footer className={styles.footer}>
                <Grid container alignItems="center" direction="column">
                    <Grid item>
                        <Typography color="textPrimary" variant="h4" component="h1">
                            Tech-Stack used
                        </Typography>
                    </Grid>
                    <Grid item container direction="row" justify="center">
                        {techStack.map(({name, slug}, i) => {
                            return (
                                <Grid item key={i}>
                                    <Tooltip title={name}>
                                        <Avatar variant="rounded" style={{ height: theme.spacing(7), width: theme.spacing(7), padding: theme.spacing(1.5), backgroundColor: `#${simpleIcons.get(slug).hex}`, margin: theme.spacing(0.5)}}>
                                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <title>{name}</title>
                                                <path d={simpleIcons.get(slug).path} fill="white"/>
                                            </svg>
                                        </Avatar>
                                    </Tooltip>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </footer>
        </ThemeProvider>
    </Grid>
    )
}
