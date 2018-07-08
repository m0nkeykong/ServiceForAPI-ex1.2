import React from 'react';
import SubCategory from './SubCategory';

const SubCategoryList = ({ subcategories }) => (
    <div className="col-12">
        {subcategories && subcategories.map((item, index) => <SubCategory  key={index} subcat={item} /> )} 
    </div>
);

//categories && ---> check if exists something in categories
export default SubCategoryList;