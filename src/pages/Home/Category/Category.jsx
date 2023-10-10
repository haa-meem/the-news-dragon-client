import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id}=useParams();
    const categoryNews=useLoaderData();
    return (
        <div>
            {id&&<h6>{categoryNews.length} News in this Category </h6>}
            {
                categoryNews.map(news=><NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;