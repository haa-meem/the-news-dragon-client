import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditorsInsights from '../../News/EditorsInsights/EditorsInsights';
import Cards from './Cards';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://the-news-dragon-server-haa-meem.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h2>All Category</h2>
            <div className="ps-4">
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className="text-decoration-none text-black">{category.name}</Link>
                    </p>)
                }
            </div>
            <Cards></Cards>
        </div>
    );
};

export default LeftNav;