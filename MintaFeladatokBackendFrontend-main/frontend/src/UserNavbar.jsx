import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';

export default function UserNavbar({ logout }) {
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        navigate("/")
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">Gyakorló feladat</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Kezdőlap</Nav.Link>
                        <Button variant="primary" type="submit" onClick={handleLogout}>
                            Kijelentkezés
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}