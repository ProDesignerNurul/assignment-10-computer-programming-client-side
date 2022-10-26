import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './LanguageSummeryCard.css';

const LanguageSummeryCard = ({ lang }) => {
    const { title, image_url } = lang;
    return (
        <div>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button className='premium-btn' variant="primary"><Link to='/premium'>Purches Premium</Link></Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default LanguageSummeryCard;