import React from 'react';
import SkillsForm from './SkillsForm';

function Resume({ data, experiences, educations, skills }){
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
            {experiences.map((exp, index) => (
                <div key={index}>
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                    <h4>{exp.startDate + " - " + exp.endDate}</h4>
                    <ul>
                        {exp.responsibilities.map((res) => (
                            <li key={res.id}>{res.text}</li>
                        ))}
                    </ul>
                 </div>
                ))
            }

            <h2>Education</h2>
            {educations.map((edu, index) => (
                <div key={index}>
                    <h3>{edu.degree}</h3>
                    <h4>{edu.uni}</h4>
                    <h4>{edu.startDate + " - " + edu.endDate}</h4>
                    <ul>
                        {edu.info.map((res) => (
                            <li key={res.id}>{res.text}</li>
                        ))}
                    </ul>
                </div>
            ))
            }

            <h2>Skills</h2>
            {skills.map((skill) => (
                <li key={skill.id}>
                    {skill.text}
                </li>
            ))}
        </div>
    );
};

export default Resume;
