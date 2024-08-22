import React from 'react';

function PersonalDataForm({ data, handleData }){
    return (
        <>
            <h2>Personal Info</h2>
            <label for="firstName">First Name</label>
            <input
                type="text"
                placeholder="Jane"
                name="firstName"
                value={data.firstName}
                onChange={handleData}/>
            <label for="lastName">Last Name</label>
            <input
                type="text"
                placeholder="Doe"
                name="lastName"
                value={data.lastName}
                onChange={handleData}/>
            <label for="phoneNo">Phone Number</label>
            <input
                type="text"
                placeholder="+60123456789"
                name="phoneNo"
                value={data.phoneNo}
                onChange={handleData}/>
            <label for="email">Email</label>
            <input
                type="email"
                placeholder="janedoe@gmail.com"
                name="email"
                value={data.email}
                onChange={handleData}/>
            <label for="location">City and Province</label>
            <input
                type="text"
                placeholder="Kuala Lumpur, Malaysia"
                name="location"
                value={data.location}
                onChange={handleData}/>
            <label for="title">Professional Tile</label>
            <input
                type="text"
                placeholder="Software Engineer"
                name="title"
                value={data.title}
                onChange={handleData}/>
            <label for="summary">Objective</label>
            <textarea
                name="summary"
                rows="4"
                cols="50"
                value={data.summary}
                onChange={handleData}/>
        </>
    )
}

export default PersonalDataForm;
