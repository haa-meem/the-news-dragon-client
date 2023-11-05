import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

const Publish = () => {
    const { user } = useContext(AuthContext);
    const [newsCategories, setNewsCategories] = useState([]);
    // const [selectedCategory, setSelectedCategory] = useState("");

    // useEffect(() => {
    //     // Fetch news categories from the provided URL
    //     fetch("https://the-news-dragon-server-haa-meem.vercel.app/categories")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setNewsCategories(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching news categories: ", error);
    //         });
    // }, []);

    const handlePublish = (event) => {
        event.preventDefault();

        const form = event.target;

        const newsTitle = form.newsTitle.value;
        const newsImage = form.newsImage.value;
        const newsDetails = form.newsDetails.value;
        const publisherName = user.displayName;
        const publisherEmail = user.email;
        const publisherPhoto = user.photoURL;

        const publicationDate = moment().format("MMMM DD, YYYY");

        const newNews = {
            newsTitle,
            newsImage,
            newsDetails,
            publisherName,
            publisherEmail,
            publisherPhoto,
            publicationDate,
        };

        // send data to the server
        fetch("https://the-news-dragon-server-haa-meem.vercel.app/publish", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newNews),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                form.reset();
                Swal.fire({
                    title: "Success!",
                    text: "Your Class Added Successfully",
                    icon: "success",
                    confirmButtonText: "Cool",
                });
            });
    };

    return (
        <div className="bg-warning p-5">
            <h2 className="fs-1 fw-bold text-center">Publish a News</h2>
            <Form onSubmit={handlePublish}>
                <Form.Group className="mb-3">
                    <Form.Label>News Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="newsTitle"
                        placeholder="Write news Headline"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>News Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        name="newsImage"
                        placeholder="News image link paste here"
                    />
                </Form.Group>

                {/* <Form.Group className="mb-3">
                    <Form.Label>News Category</Form.Label>
                    <Form.Control as="select" name="newsCategory" onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="">Select a category</option>
                        {newsCategories.map((category) => (
                            <option key={category.id} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group> */}

                <Form.Group className="mb-3">
                    <Form.Label>News in Detail</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="newsDetails"
                        placeholder="Write here your collected news in detail..."
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Publisher Photo</Form.Label>
                    <div>
                        <img src={user?.photoURL} alt="Publisher" width="100" height="100" />
                    </div>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Publisher Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="publisherName"
                        value={user.displayName}
                        readOnly
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Publisher Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="publisherEmail"
                        value={user.email}
                        readOnly
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Publish
                </Button>
            </Form>
        </div>
    );
};

export default Publish;
