import React from 'react';
import { Card } from 'react-bootstrap';
import './aboutTeam.css';



export default function AboutTeam({ p13_img, p12_img, p26_img }) {

    const names = [
        {
            id: 1,
            name: 'name1',
            img: p12_img
        },
        {
            id: 2,
            name: 'name2',
            img: p13_img
        },
        {
            id: 3,
            name: 'name3',
            img: p26_img
        }


    ]
    return (
        <Card className='mt-4'>
            <Card.Header style={{textAlign:'center'}} as="h1">Team</Card.Header>
            <Card.Body className='flex CartBody'>



                {names.map((name) => {
                    return <div key={name.id} className="info flex">
                        <div className="imageContainer">
                            <img src={name.img} alt="p13_img" className='roundedCircle' />
                        </div>
                        <div className="name">
                            <h2>
                                {name.name}
                            </h2>
                            <p>
                                Owner
                            </p>
                        </div>
                    </div>
                })}



            </Card.Body>


        </Card>
    );
}