// import React from "react";
import React, { useState } from "react";


function ExperienceForm({ experiences, setExperiences }) {
    const [experience, setExperience] = useState({
        id: "",
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        responsibilities: []})


    const handleChange = (e) => {
        const {name, value} = e.target;

        setExperience((prevExp) => ({
            ...prevExp,
            [name]: value
        }));
    }
    const [description, setDescription] = useState("")


    const handleDescription = (e) => {
        setExperience((prevExp) => ({
                ...prevExp,
                responsibilities: [
                    ...prevExp.responsibilities,
                    {text: description, id: crypto.randomUUID() }
                ],
            }));
        setDescription("");
    };

    const handleDescriptionEdit = (id) => {
        const result = experience.responsibilities.find(res => res.id === id)
        setDescription(result.text)
        handleDescriptionDelete(id)
    }

    const handleDescriptionDelete = (id) => {
        setExperience((currentExp) => ({
                ...currentExp,
                responsibilities: currentExp.responsibilities.filter((des) => des.id !== id)
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (experience.id){
            setExperiences((currentExp) =>
                currentExp.map((exp) => exp.id === experience.id ? experience : exp)
            )
        }
        else {
            setExperiences((currentExp) => {
                return [
                    ...currentExp,
                    {...experience, id: crypto.randomUUID() }
                ]
            })
        }
        setExperience({
            id: "",
            title: "",
            company: "",
            startDate: "",
            endDate: "",
            responsibilities: []
        })
        setDescription("");
    }

    const handleEdit = (id) => {
        setExperience(experiences.find(exp => exp.id === id))
    }

    const handleDelete = (id) => {
        setExperiences((currentExps) => currentExps.filter(exp => exp.id !== id))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Professional Experience</h2>
                <label htmlFor="title">Title/Position</label>
                <input
                    type="text"
                    name="title"
                    required
                    placeholder="Software Engineer"
                    value={experience.title}
                    onChange={handleChange}/>
                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    name="company"
                    required
                    placeholder="The Odin Company"
                    value={experience.company}
                    onChange={handleChange}/>
                <label htmlFor="startDate">Start Date</label>
                <input
                    type="text"
                    name="startDate"
                    required
                    placeholder="DD/MM/YYYY"
                    value={experience.startDate}
                    onChange={handleChange}/>
                <label htmlFor="endDate">End Date</label>
                <input
                    type="text"
                    name="endDate"
                    required
                    placeholder="DD/MM/YYYY"
                    value={experience.endDate}
                    onChange={handleChange}/>
                <label htmlFor="description">Key Responsibilities</label>
                <input
                    type="text"
                    name="description"
                    placeholder="Enter a responsibility & press '+' button to add"
                    value={description}
                    onChange={e => setDescription(e.target.value)}/>
                <button type="button" onClick={handleDescription}>+</button>
                <ul>
                    {experience.responsibilities.map((des) => (
                        <li key={des.id}>
                            {des.text}
                            <button type="button" onClick={() => handleDescriptionEdit(des.id)}>Edit</button>
                            <button type="button" onClick={() => handleDescriptionDelete(des.id)}>Delete</button>
                        </li>
                    ))}
                </ul>

                <button type="submit">{experience.id ? "Update Experience" : "Add Experience"}</button>
            </form>
            <ul>
                {experiences.map((exp) => (
                    <li key={exp.id}>
                        <p>{exp.title}</p>
                        <p>{exp.company}</p>
                        <p>{exp.startDate + " - " + exp.endDate}</p>
                        <p>{exp.responsibilities.map(d => <span key={d.id}>{d.text}</span>)}</p>
                        <button onClick={e => handleEdit(exp.id)}>Edit</button>
                        <button onClick={e => handleDelete(exp.id)}>Delete</button>
                    </li>
                ))}
             </ul>
        </div>
    )
}

export default ExperienceForm;
