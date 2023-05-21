import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../public/images/logo-color-short.png";
import Image from 'next/image'
import styles from '@/styles/navbar.module.css'

export default function MyNavbar() {
    return (
        <div className={styles.nav}>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
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
                            <Nav.Link href="/projects">Sample Projects</Nav.Link>
                            <NavDropdown title="Projects" id="projectsDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

// // import Logo from "../public/images/logo-color-short.png";
// import Image from 'next/image'
// import styles from '@/styles/myNavbar.module.css'

// export default function MyNavbar() {
//     return (
//         <nav class="navbar navbar-expand-lg">
//             <div class="container-fluid">
//                 {/* <div className={styles.nav}> */}
//                     <a href="#">
//                         <Image
//                             src="/images/logo-color-short.png"
//                             alt="Name Logo"
//                             className={styles.nameLogo}
//                             width={400}
//                             height={100}
//                             priority
//                         />
//                     </a>
//                     <button
//                         class="navbar-toggler"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbarSupportedContent"
//                         aria-controls="navbarSupportedContent"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="#">Home</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Resume</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Gallery</a>
//                             </li>
//                             <li class="nav-item dropdown">
//                                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
//                                     data-bs-toggle="dropdown" aria-expanded="false">
//                                     Contact
//                                 </a>
//                                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                                     <li><a class="dropdown-item" href="#">My Info</a></li>
//                                     <li>
//                                         <hr class="dropdown-divider" />
//                                     </li>
//                                     <li><a class="dropdown-item" href="#">Contact Form</a></li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </div>
//                 {/* </div> */}
//             </div>
//         </nav>
//     )
// }
