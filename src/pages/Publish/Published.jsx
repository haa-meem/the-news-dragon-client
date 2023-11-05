import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from '../News/EditorsInsights/EditorsInsights';

const Published = () => {
    const publishedData = useLoaderData();

    return (
        <div>
            {publishedData.map((item) => (
                <Card key={item._id}>
                    <Card.Img variant="top" src={item.newsImage} />
                    <Card.Body>
                        <Card.Title>{item.newsTitle}</Card.Title>
                        <Card.Text>{item.newsDetails}</Card.Text>

                        <div>
                            <Image src={item.publisherPhoto} roundedCircle />
                            <span>{item.publisherName}</span>
                        </div>

                        <div>
                            <small>Publication Date: {item.publicationDate}</small>
                        </div>

                        <Link to={`/category/${item.category_id}`}>
                            <Button variant="danger">
                                <FaArrowLeft />
                                All News in this category
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
            <EditorsInsights />
        </div>
    );
};

export default Published;
