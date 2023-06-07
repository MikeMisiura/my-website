import styles from '@/styles/projects.module.css'
import ListProducts from '@/components/ListProducts'

export default function Projects() {

    return (
        <div className={styles.nav}>
            <h1>Projects</h1>
            <ListProducts />
        </div>
    )
}