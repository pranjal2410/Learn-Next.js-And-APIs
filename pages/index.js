import Head from 'next/head'
import InfoCard from "../components/InfoCard";
import styles from '../styles/Home.module.css';
import {ThemeContext} from "../components/themer";
import {ThemeProvider, CssBaseline, AppBar, Toolbar, IconButton} from "@material-ui/core";
import {Brightness4, Brightness7} from "@material-ui/icons";
import React, {useContext} from "react";

export default function Home() {

    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
    <div className={styles.container}>
        <Head>
            <title>Next.js + Framer</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <ThemeProvider theme={theme}>
            <CssBaseline/>
                <AppBar position="fixed" color="transparent">
                    <Toolbar variant="dense">
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

                <div className={styles.grid}>
                    <InfoCard/>

                    <a
                      href="https://github.com/vercel/next.js/tree/master/examples"
                      className={styles.card}
                    >
                        <h3>Examples &rarr;</h3>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                      className={styles.card}
                    >
                        <h3>Deploy &rarr;</h3>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                </div>
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
    </div>
    )
}
