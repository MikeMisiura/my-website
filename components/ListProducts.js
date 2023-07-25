import { projects } from '@/data/projects.json'
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import styles from '@/styles/ListProducts.module.css'
import Image from 'next/image'
import banner from "../public/images/banner.png";


export default function ListProducts() {
    function findSrc(src) { return (`/../public/images/project-screenshots/${src}.png`) }

    return (
        <Container>
            <Image
                src={banner}
                alt="banner"
                width={500}
            />

            <Row>
                {projects.map((p) => {
                    if (!p.display) return
                    return (
                        <Card className={styles.card} style={{ width: '300px' }}>
                            {p.screenshot && <Image style={{ paddingTop: '10px' }} variant="top" src={findSrc(p.screenshot)} alt={p.title} height={200} width={275} />}
                            <Card.Body>
                                <Card.Title>{p.title}</Card.Title>
                                <Card.Text>{p.description}</Card.Text>
                                <Card.Text>{p.resources}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                {p.live ?
                                    <Card.Link target="_blank" href={p.link}>Visit {p.title}</Card.Link>
                                    :
                                    <Card.Link>{p.title} is not yet live.</Card.Link>
                                }
                                <br />
                                <Card.Link href={p.github}>Github for {p.title}</Card.Link>
                            </Card.Footer>
                        </Card>
                    )
                })}
            </Row>
        </Container>
    )
}
