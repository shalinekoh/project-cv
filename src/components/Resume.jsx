import React from 'react';

function Resume({ data }){
    return (
        <div>
            <h1>{data.firstName + " " + data.lastName}</h1>
            <div className="contactInfo">
                {data.phoneNo}
                {data.email}
                {data.location}
            </div>
            <h2>{data.title}</h2>
            <p>{data.summary}</p>
        </div>
    );
};

export default Resume;
