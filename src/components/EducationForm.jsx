import React, { useState } from "react";
import '../styles/EducationForm.css'

function EducationForm( {educations, setEducations }){
    const [education, setEducation] = useState({
                                                id: "",
                                                uni: "",
                                                degree: "",
                                                startDate: "",
                                                endDate: "",
                                                info: []
    })
    const [info, setInfo] = useState("")

    const handleChange = (e) => {
        const {name, value} = e.target
        setEducation((currentEdu) => {
            return {
                ...currentEdu,
                [name]: value}
        })
    }

    const addInfo = (e) => {
        setEducation((currentEducation) => {
            return {
                ...education,
                info: [
                    ...currentEducation.info,
                    { text: info, id: crypto.randomUUID() }
                ]
            }
        })
        setInfo("");
    }

    const handleInfoEdit = (id) => {
        const result = education.info.find(res => res.id === id);
        setInfo(result.text);
        handleInfoDelete(result.id);
    };

    const handleInfoDelete = (id) => {
        setEducation((currentEdu) => {
            return {
                ...currentEdu,
                info: education.info.filter((el) => el.id !== id)
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (education.id){
            setEducations((currentEdu) =>
                currentEdu.map((edu) => edu.id === education.id ? education : edu)
            )
        }
        else {
            setEducations((currentEdu) => {
                return [
                    ...currentEdu,
                    {...education, id: crypto.randomUUID() }
                ]
            })
        }

        setEducation({
            id: "",
            uni: "",
            degree: "",
            startDate: "",
            endDate: "",
            info: [] })

        setInfo("")
    }

    const handleEdit = (id) => {
        setEducation(educations.find(edu => edu.id === id))
    }

    const handleDelete = (id) => {
        setEducations((currentEdus) => currentEdus.filter(edu => edu.id !== id))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Education</h2>
            <label htmlFor="uni">University</label>
            <input
                name="uni"
                type="text"
                placeholder="University of Odin"
                required
                value={education.uni}
                onChange={handleChange}
            />
            <label htmlFor="degree">Degree</label>
            <input
                name="degree"
                type="text"
                placeholder="Bachelor of Computer Science"
                required
                value={education.degree}
                onChange={handleChange}
            />
            <label htmlFor="startDate">Start Date</label>
                <input
                    type="text"
                    name="startDate"
                    required
                    placeholder="DD/MM/YYYY"
                    value={education.startDate}
                    onChange={handleChange}
                />
                <label htmlFor="endDate">End Date</label>
                <input
                    type="text"
                    name="endDate"
                    required
                    placeholder="DD/MM/YYYY"
                    value={education.endDate}
                    onChange={handleChange}
                />
                <label htmlFor="info">Additional Information</label>
                <input
                    type="text"
                    name="info"
                    placeholder="Enter extra info here"
                    value={info}
                    onChange={e => setInfo(e.target.value)}
                />
                <button type="button" onClick={addInfo}>+</button>

                {education.info.map((info) => (
                    <li key={info.id}>
                        {info.text}
                        <button type="button" onClick={() => handleInfoEdit(info.id)}>Edit</button>
                        <button type="button" onClick={() => handleInfoDelete(info.id)}>Delete</button>
                    </li>
                    ))
                }
                <button type="submit">Add Education</button>

                <ul>
                    {educations.map((edu) => {
                        <li key={edu.id}>
                            <p>{edu.uni}</p>
                            <p>{edu.degree}</p>
                            <p>{edu.startDate + " - " + edu.endDate}</p>
                            <p>{edu.info.map(d => <span key={d.id}>{d.text}</span>)}</p>
                            <button onClick={e => handleEdit(edu.id)}>Edit</button>
                            <button onClick={e => handleDelete(edu.id)}>Delete</button>
                        </li>
                    })}
                </ul>
        </form>
    )
}

export default EducationForm;
