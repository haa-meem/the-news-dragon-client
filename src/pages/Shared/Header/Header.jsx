import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100}>
                    President Biden condemned Hamas as a terrorist group and confirmed that American citizens were being held hostage. Secretary of State Antony Blinken is planning a trip to Israel, where rocket-warnings blared as the military pushed to control the Gaza border. 
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;