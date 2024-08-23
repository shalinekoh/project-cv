import React, { useState } from 'react';
import ExperienceForm from './components/ExperienceForm';
import PersonalDataForm from './components/PersonalDataForm';
import Resume from './components/Resume';

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

  const [experiences, setExperiences] = useState([])

  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <PersonalDataForm data={data} setData={setData} />
      <ExperienceForm experiences={experiences} setExperiences={setExperiences} />
      <Resume data={data} experiences={experiences} />
    </div>
  )

}

export default App;
