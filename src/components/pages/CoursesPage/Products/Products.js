import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CoursePacks from './CoursePacks/CoursePacks';
import './Products.css';
function Products() {
    return (
        <div className="d-flex flex-column bd-highlight mb-3">
            <div className="p-2 bd-highlight">
                <p className = "kits-title">PRODUCTS</p></div>
            <div className="p-2 bd-highlight">
                <p  className = "kits-description">Home learning Kit - Our best selling home learning kits are school aligned and adds structure to your child’s learning at home. </p>
            </div>
            <div className="p-2 bd-highlight">
                <p className = "kit">FEATURED HOME LEARNING KITS</p>
            </div>
            <div className="p-2 bd-highlight">
                <CoursePacks />
            </div>
        </div>
    )
}

export default Products
