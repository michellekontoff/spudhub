import React, { useState, useEffect } from 'react';
import './starMaker.css'


const StarMaker = ({rating}) => {

    let res = [];
    for (let i = 0; i < Math.floor(rating); i++) {
        res.push(<i className="starMaker fas fa-star"></i>);
    }

    return (
        <>
        {res.map(result => (
            result
        ))}
        {Number.isInteger(rating) ? null : <i className="fas fa-star-half-alt cut"></i>}
        </>
    )
}

export default StarMaker;
