import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id odio maiores mollitia, necessitatibus sit sunt, est sequi ullam in quo aut, corrupti natus consequatur. Ullam illum velit qui id!</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;