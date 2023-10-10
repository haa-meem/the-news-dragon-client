import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/category/0" className='text-decoration-none me-3 text-secondary'>Home</Link>
                            <Link to="#about" className='text-decoration-none me-3 text-secondary'>About</Link>
                            <Link to="#career" className='text-decoration-none me-3 text-secondary'>Career</Link>
                        </Nav>
                        <Nav>
                            {
                                user &&
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={<Tooltip>{user.displayName}</Tooltip>}
                                >
                                    <Image src={user?.photoURL} className='rounded-5 me-2' height='50px' />
                                </OverlayTrigger>
                            }
                            {user ? <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </Container >
    );
};

export default NavigationBar;