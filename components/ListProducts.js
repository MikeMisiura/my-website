import { projects } from '@/data/projects.json'
import Card from 'react-bootstrap/Card';

export default function ListProducts() {
    return projects.map((p) => {
        if (!p.display) return
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={p.screenshot} />
            <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>{p.description}</Card.Text>
                <Card.Link href={p.link}>View {p.title}</Card.Link>
                <Card.Link href={p.github}>Github for {p.title}</Card.Link>
            </Card.Body>
        </Card>
        )
    })
}
