import React, { useState } from "react";
import '../styles/SkillsForm.css'

function SkillsForm( { skills, addSkills } ) {
    const [skill, setSkill] = useState("")

    const handleSkill = (e) => {
        addSkills((prevSkills) => ([
            ...prevSkills,
            {text: skill, id: crypto.randomUUID()}
        ]))
        setSkill("");
    }

    const handleSkillEdit = (id) => {
        const result = skills.find(res => res.id === id)
        setSkill(result.text)
        handleSkillDelete(id)
    }

    const handleSkillDelete = (id) => {
        addSkills((currentSkills) => currentSkills.filter(skill => skill.id !== id))
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    return (
        <form>
            <h2>Skills</h2>
            <label htmlFor="skills">Skill(s)</label>
            <input
                name="skills"
                type="text"
                placeholder="Enter a skill"
                value={skill}
                onChange={e => setSkill(e.target.value)}
            />
            <button type="button" onClick={handleSkill}>+</button>
            <ul>
                    {skills.map((skill) => (
                        <li key={skill.id}>
                            {skill.text}
                            <button type="button" onClick={() => handleSkillEdit(skill.id)}>Edit</button>
                            <button type="button" onClick={() => handleSkillDelete(skill.id)}>Delete</button>
                        </li>
                    ))}
            </ul>
            {/* <button type="submit">Add Skills</button> */}
        </form>
    )
}

export default SkillsForm;
