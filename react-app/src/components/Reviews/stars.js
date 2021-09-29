import React, { useState, useEffect } from 'react';
import './starMaker.css'


const StarMaker = ({rating}) => {

    let res = [];
    for (let i = 0; i < rating; i++) {
        res.push(<i className="starMaker fas fa-star"></i>);
    }

    return (
        res.map(result => (
            result
        ))
    )
}

export default StarMaker;
