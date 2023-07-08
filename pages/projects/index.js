import styles from '@/styles/projects.module.css'
import ListProducts from '@/components/ListProducts'
import Head from 'next/head'


export default function Projects() {

    return (
        <>
            <Head>
                <title>Mike Misiura</title>
                <meta name="description" content="Mike Misiura Resume" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/icon.ico" />
            </Head>

            <div className={styles.nav}>
                <h1>My Projects</h1>
                <ListProducts />
            </div>
        </>
    )
}