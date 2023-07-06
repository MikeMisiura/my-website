import { projects } from '@/data/projects.json'
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import styles from '@/styles/ListProducts.module.css'

export default function ListProducts() {
    return (
        <Container>
            <Row>
                {projects.map((p) => {
                    if (!p.display) return
                    return (
                        <Card className={styles.card} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={p.screenshot} />
                            <Card.Body>
                                <Card.Title>{p.title}</Card.Title>
                                <Card.Text>{p.description}</Card.Text>
                                <Card.Text>{p.resources}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                {p.live ?
                                    <Card.Link href={p.link}>Visit {p.title}</Card.Link>
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
