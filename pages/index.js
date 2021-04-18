import Head from 'next/head'
import InfoCard from "../components/InfoCard";
import styles from '../styles/Home.module.css';
import {ThemeContext} from "../components/themer";
import {ThemeProvider, CssBaseline, AppBar, Toolbar, IconButton, Grid} from "@material-ui/core";
import {Brightness4, Brightness7} from "@material-ui/icons";
import React, {useContext} from "react";
import LinkCards from "../components/LinkCards";
import AnimatedImages from "../components/Animate";

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
            <Grid container justify="center" alignItems="center" direction="column" style={{ padding: "5rem 0", flex: "1"}}>
                <InfoCard/>
                <AnimatedImages/>
                <LinkCards/>
            </Grid>

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
