import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"

export default function Header() {
    return (
        <div >
            <Navbar bg="dark" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="#home" ><h3>TimeCrafters</h3></Navbar.Brand>
                    <Nav className="ms-auto" >
                        <NavDropdown title="Menu" id="navbarScrollingDropdown" >
                            <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
                            <NavDropdown.Item href="/login">
                                Login
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

