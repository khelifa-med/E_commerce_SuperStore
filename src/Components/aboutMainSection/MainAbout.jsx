import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MainAbout.css';

export default function MainAbout({ p13_img, p12_img, p26_img }) {
    return (
        <Card className='mt-4'>
            <Card.Header style={{textAlign:'center'}} as="h1">About Us</Card.Header>
            <Card.Body className='flex CartBody'>
                <div className="leftSection">
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Eos recusandae fuga quis ea harum doloremque ullam dolore.
                        Totam vero doloribus aspernatur error!
                        Corporis numquam quia repellendus fuga nam eius at.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </div>
                <div className="rigthSection">
                    <img src={p13_img} alt="Product 13" className="img-thumbnail" />
                </div>
            </Card.Body>

            <div className="divider"></div>

            <Card.Body className='flex CartBody'>
                <div className="rigthSection">
                    <img src={p26_img} alt="Product 26" className="img-thumbnail" />
                </div>
                <div className="leftSection">
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Eos recusandae fuga quis ea harum doloremque ullam dolore.
                        Totam vero doloribus aspernatur error!
                        Corporis numquam quia repellendus fuga nam eius at.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </div>
            </Card.Body>

            <div className="divider"></div>

            <Card.Body className='flex CartBody'>
                <div className="leftSection">
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Eos recusandae fuga quis ea harum doloremque ullam dolore.
                        Totam vero doloribus aspernatur error!
                        Corporis numquam quia repellendus fuga nam eius at.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </div>
                <div className="rigthSection">
                    <img src={p12_img} alt="Product 12" className="img-thumbnail" />
                </div>
            </Card.Body>
        </Card>
    );
}