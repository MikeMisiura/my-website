import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../public/images/logo-color-short.png";
import Image from 'next/image'
import styles from '@/styles/navbar.module.css'

export default function MyNavbar() {
    return (
        <div className={styles.nav}>
            <Navbar expand="md">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <Image
                            src={Logo}
                            alt="Name Logo"
                            className={styles.nameLogo}
                            width={400}
                            height={100}
                            priority
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}