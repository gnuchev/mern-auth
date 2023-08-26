import { Container, Card, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

const Hero = () => {
    return (
        <div className='py-5'>
            <Container className='d-flex justify-content-center'>
                <Card className="p-5 d-flex flex-column justify-content-center align-items-center hero-card bg-light w-75">
                    <h1 className='text-center'>Welcome to MERN Auth App</h1>
                    <p className='text-center'>This is a MERN stack authentication app with email verification and password reset functionality.</p>
                    <div className='d-flex'>
                    <LinkContainer to="/login">
                    <Button variant='primary'className='me-3'>
                        Sign In
                    </Button>
                    </LinkContainer>
                    <LinkContainer to="/register">
                    <Button variant='secondary'>
                        Sign Up
                    </Button>
                    </LinkContainer>
                    </div>
                </Card>
            </Container>
        </div>
    );
};

export default Hero;
