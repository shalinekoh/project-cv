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

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure the name and value properties from e.target
    setData((prevData) => ({
      ...prevData,
      [name]: value, // Use the name attribute to update the corresponding property in state
    }));
  };


  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <PersonalDataForm data={data} handleData={handleChange} />
      <ExperienceForm />
      <Resume data={data} />
    </div>
  )

}

export default App;
