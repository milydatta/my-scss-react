import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [
    {name:'Lenovo', category:'laptop'}, {name:'Asus', category:'laptop'}, {name:'Dell', category:'laptop'},
    {name:'Samsung', category:'Mobile'}, {name:'Nokia', category:'Mobile'}, {name:'Apple', category:'Mobile'},
    {name:'Canon', category:'Camera'}, {name:'Nikkon', category:'Camera'}, {name:'Sony', category:'Camera'}
]

const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
       const matchedProducts = allProducts.filter(pd => pd.category === category && category.toLowerCase());
       setProducts(matchedProducts);
    }, [category])
    return (
        <div>
            <h4>Select your Category: {category}</h4>
            {
                products.map(pd =><CategoryDetail product= {pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;