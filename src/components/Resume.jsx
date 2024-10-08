import React from 'react';
import '../styles/Resume.css'

function Resume({ data, experiences, educations, skills }){
    return (
        <div>
            <h1>{data.firstName + " " + data.lastName}</h1>
            <div className="contactInfo">
                <p>{data.phoneNo}</p>
                <p>{data.email}</p>
                <p>{data.location}</p>
            </div>
            <h2>{data.title}</h2>
            <p>{data.summary}</p>

            <h2>Professional Experiences</h2>
            {experiences.map((exp, index) => (
                <div key={index}>
                    <h3>{exp.title}</h3>
                    <div className="info-container">
                        <h4>{exp.company}</h4>
                        <h4>{exp.startDate + " - " + exp.endDate}</h4>
                    </div>
                    <ul>
                        {exp.responsibilities.map((res) => (
                            <li key={res.id}>• {res.text}</li>
                        ))}
                    </ul>
                 </div>
                ))
            }

            <h2>Education</h2>
            {educations.map((edu, index) => (
                <div key={index}>
                    <h3>{edu.degree}</h3>
                    <div className="info-container">
                        <h4>{edu.uni}</h4>
                        <h4>{edu.startDate + " - " + edu.endDate}</h4>
                    </div>
                    <ul>
                        {edu.info.map((res) => (
                            <li key={res.id}>• {res.text}</li>
                        ))}
                    </ul>
                </div>
            ))
            }

            <h2>Skills</h2>
            <ul className="skill-container">
                {skills.map((skill) => (
                    <li key={skill.id}>
                        {skill.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Resume;
