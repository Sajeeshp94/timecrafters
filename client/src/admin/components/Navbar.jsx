import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
// import "./Navbar.css"


export default function NavbarWrapper({title}){
    return(

            <Navbar bg="dark" data-bs-theme="dark"  >
                <Container>
                    <Navbar.Brand href="#home" ><h3>{title}</h3></Navbar.Brand>
                    <Nav className="ms-auto" >
                    <NavDropdown title="Menu" id="navbarScrollingDropdown" >
                            <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>        
    )
}