import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../../QZone/QZone';
import bg from '../../../assets/bg.png';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

const RightNav = () => {
    // Google Login
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mb-1'><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login with GitHub</Button>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> instagram</ListGroup.Item>
                </ListGroup>
                <QZone></QZone>
                <div style={{ backgroundImage: `url(${bg})`, position: 'absolute', backgroundSize: "contain", height: 509, width: 267 }} className='text-center text-white py-5 px-5'>
                    <h2>
                        Create an Amazing Newspaper
                    </h2>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;