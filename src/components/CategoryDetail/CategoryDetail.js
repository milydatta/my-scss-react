import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {name} = props.product
    return (
        <div>
            <h1>This is your Category Detail</h1>
            <h6>Selected Product: {name}</h6>
        </div>
    );
};

export default CategoryDetail;