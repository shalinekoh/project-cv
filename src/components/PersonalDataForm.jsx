import React from 'react';
import '../styles/PersonalDataForm.css'

function PersonalDataForm({ data, setData }){
    const handleData = (e) => {
        const { name, value } = e.target; // Destructure the name and value properties from e.target
        setData((prevData) => ({
          ...prevData,
          [name]: value, // Use the name attribute to update the corresponding property in state
        }));
      };

    return (
        <form>
            <h2>Personal Info</h2>
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                placeholder="Shaline"
                name="firstName"
                value={data.firstName}
                onChange={handleData}/>
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                placeholder="Koh"
                name="lastName"
                value={data.lastName}
                onChange={handleData}/>
            <label htmlFor="phoneNo">Phone Number</label>
            <input
                type="text"
                placeholder="+60123456789"
                name="phoneNo"
                value={data.phoneNo}
                onChange={handleData}/>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                placeholder="kohshaline@gmail.com"
                name="email"
                value={data.email}
                onChange={handleData}/>
            <label htmlFor="location">City and Province</label>
            <input
                type="text"
                placeholder="Kuala Lumpur, Malaysia"
                name="location"
                value={data.location}
                onChange={handleData}/>
            <label htmlFor="title">Professional Tile</label>
            <input
                type="text"
                placeholder="Software Engineer"
                name="title"
                value={data.title}
                onChange={handleData}/>
            <label htmlFor="summary">Objective</label>
            <textarea
                name="summary"
                rows="4"
                cols="50"
                value={data.summary}
                onChange={handleData}/>
        </form>
    )
}

export default PersonalDataForm;
