import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    return (
        <div>
            <div className='mb-4 header'>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand > <Link to='/'>Computer Programming Tech</Link> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#pricing"><Link  to='/home'>Home</Link></Nav.Link>
                                <Nav.Link href="#features"><Link  to='/courses'>Courses</Link></Nav.Link>
                                <Nav.Link href="#features"><Link to=''>FAQ</Link></Nav.Link>
                                <Nav.Link href="#features"><Link to=''>Blogs</Link></Nav.Link>
                                <Nav.Link href="#features"><Link to=''>About</Link></Nav.Link>
                                
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets"> <Link to='/login'> <Button variant="light">Log In</Button></Link> </Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    <Link to='/register'><Button variant="light">Register</Button></Link>
                                </Nav.Link>
                            </Nav>
                            <div className='d-lg-none'>
                                <LeftSideNav></LeftSideNav>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            
        </div>
    );
};

export default Header;