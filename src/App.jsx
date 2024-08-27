import React, { useState } from 'react';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import PersonalDataForm from './components/PersonalDataForm';
import SkillsForm from './components/SkillsForm';
import Resume from './components/Resume';
import './App.css'

const App = () => {
  const [data, setData] = useState({
                                    firstName: "Jane",
                                    lastName: "Doe",
                                    phoneNo: "+0123456789",
                                    email: "janedoe@gmail.com",
                                    location: "Kuala Lumpur, Malaysia",
                                    title: "Software Engineer",
                                    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis est aliquam, commodo urna non, egestas purus. Sed fringilla, nulla vitae gravida aliquet, lectus magna."
  })

  const [experiences, setExperiences] = useState([]);

  const [educations, setEducations] = useState([]);

  const [skills, addSkills] = useState([]);

  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <PersonalDataForm data={data} setData={setData} />
      <ExperienceForm experiences={experiences} setExperiences={setExperiences} />
      <EducationForm educations={educations} setEducations={setEducations} />
      <SkillsForm skills={skills} addSkills={addSkills} />
      <Resume data={data} experiences={experiences} educations={educations} skills={skills}/>
    </div>
  )

}

export default App;
