import React from 'react';

function Resume({ data, experiences }){
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


            <h2>Professional Experiences</h2>
            {experiences.map((exp) => (
                <div>
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                    <h4>{exp.startDate + " - " + exp.endDate}</h4>
                    <ul>
                        {exp.description.map((res, index) => (
                            <li key="index">{res}</li>
                        ))}
                    </ul>
                 </div>
            ))}
        </div>
    );
};

export default Resume;
