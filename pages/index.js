import Head from 'next/head'
import InfoCard from "../components/InfoCard";
import styles from '../styles/Home.module.css';
import {ThemeContext} from "../components/themer";
import {ThemeProvider, CssBaseline, AppBar, Toolbar, IconButton, makeStyles, Grid} from "@material-ui/core";
import {Brightness4, Brightness7} from "@material-ui/icons";
import React, {useContext} from "react";
import LinkCards from "../components/LinkCards";

const useStyles = makeStyles((theme) => ({
    card: {
        margin: '1rem',
        flexBasis: '45%',
        padding: '1.5rem',
        textAlign: 'left',
        color: 'inherit',
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

export default function Home() {
    const classes = useStyles();

    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
    <Grid container justify="center" alignItems="center" direction="column" style={{ display: "flex"}}>
        <Head>
            <title>Next.js + Framer</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <ThemeProvider theme={theme}>
            <CssBaseline/>
                <AppBar position="fixed" color="transparent" style={{ boxShadow: "none"}}>
                    <Toolbar>
                        <div/>
                        <IconButton edge="end" onClick={toggleTheme}>
                            {theme.palette.type === 'light'?<Brightness4/> : <Brightness7/>}
                        </IconButton>
                </Toolbar>
            </AppBar>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to a demo of Framer motion and <br/><a href="https://nextjs.org">Next.js</a>
                </h1>
                <InfoCard/>
                <LinkCards/>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </ThemeProvider>
    </Grid>
    )
}
