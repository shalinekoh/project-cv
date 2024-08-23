// import React from "react";
import React, { useState } from "react";


function ExperienceForm({ experiences, setExperiences }) {
    const [experience, setExperience] = useState({
        id: "",
        title: "",
        company: "",
        startDate: "",
        endDate: ""})

    const handleChange = (e) => {
        const {name, value} = e.target;
        setExperience((prevExp) => ({
            ...prevExp,
            [name]: value

        }));
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
            endDate: ""})
    }

    const handleEdit = (id) => {
        setExperience(experiences.find(exp => exp.id === id))
    }

    const handleDelete = (id) => {
        setExperiences((currentExps) => {
            return currentExps.filter(exp => exp.id !== id)
        } )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Professional Experience</h2>
                <label for="title">Title/Position</label>
                <input
                    type="text"
                    name="title"
                    required
                    placeholder="Software Engineer"
                    value={experience.title}
                    onChange={handleChange}/>
                <label for="company">Company</label>
                <input
                    type="text"
                    name="company"
                    required
                    placeholder="The Odin Company"
                    value={experience.company}
                    onChange={handleChange}/>
                <label for="startDate">Start Date</label>
                <input
                    type="text"
                    name="startDate"
                    required
                    placeholder="DD/MM/YYYY"
                    value={experience.startDate}
                    onChange={handleChange}/>
                <label for="endDate">End Date</label>
                <input
                    type="text"
                    name="endDate"
                    required
                    placeholder="DD/MM/YYYY"
                    value={experience.endDate}
                    onChange={handleChange}/>
                <button type="submit">{experience.id ? "Update Experience" : "Add Experience"}</button>
            </form>

            {experiences.map((exp) => (

                <li key={exp.id}>
                    <p>{exp.title}</p>
                    <p>{exp.company}</p>
                    <p>{exp.startDate + " - " + exp.endDate}</p>
                    <button onClick={e => handleEdit(exp.id)}>Edit</button>
                    <button onClick={e => handleDelete(exp.id)}>Delete</button>
                </li>

            ))}
        </div>
    )
}

export default ExperienceForm;
