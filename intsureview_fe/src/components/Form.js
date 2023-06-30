import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agePreference, setAgePreference] = useState('');
  const [activityPreference, setActivityPreference] = useState('');
  const [experienceWithPets, setExperienceWithPets] = useState(false);
  const [otherPets, setOtherPets] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [requiredFieldsError, setRequiredFieldsError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate the required fields
    if (!name || !email || !agePreference || experienceWithPets === '' || otherPets === '') {
      setRequiredFieldsError('Please fill out all required fields');
      return;
    }
  
    // Reset the error message and set the form submission status to true
    setRequiredFieldsError('');
    setFormSubmitted(true);
  
    // Testing
    console.log('Form submitted');
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    if (!validateEmail(enteredEmail)) {
      setEmailError('Not a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validateEmail = (email) => {
    // Email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleOtherPetsChange = (e) => {
    setOtherPets(e.target.value);
  };

  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters from the input value
    const cleanedValue = value.replace(/\D/g, '');

    // Apply the formatting mask
    const formattedValue = cleanedValue.replace(
      /^(\d{3})(\d{3})(\d{4})$/,
      '($1)-$2-$3'
    );

    return formattedValue;
  };

  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatPhoneNumber(inputValue);

    setPhoneNumber(formattedValue);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-6">
      <h2 className="text-2xl font-bold">Dog Adoption Interest Form</h2>

      <div className='space-y-2'>
      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={`block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none ${
              emailError ? 'ring-red-500 border-red-500' : 'focus:ring-blue-500 focus:border-blue-500'
            }`}
            placeholder="you@example.com"
            required
          />
          {emailError && (
            <span className="absolute top-1 right-2 text-red-500 text-lg">!</span>
          )}
        </div>
        {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
        )}
     </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="##########"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="agePreference" className="block text-gray-700 font-medium mb-1">
          Age Preference <span className="text-red-500">*</span>
        </label>
        <select
          id="agePreference"
          className="form-select block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={agePreference}
          onChange={(e) => setAgePreference(e.target.value)}
          required
        >
          <option value="">Select an option</option>
          <option value="puppy">Puppy (0-6 months)</option>
          <option value="juveniles">Juveniles (7 months -1 year)</option>
          <option value="youngAdults">Young Adults</option>
          <option value="senior">Senior</option>
          <option value="noPreference">No Preference</option>
        </select>
      </div>

      <div>
        <label htmlFor="activityPreference" className="block text-gray-700 font-medium mb-1">
          What type of personality do you want your pet to have?
        </label>
        <input
          type="text"
          id="activityPreference"
          value={activityPreference}
          onChange={(e) => setActivityPreference(e.target.value)}
          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="(i.e. calm, energetic, protective, couch-potato)"
        />
      </div>
   
      <div>
        <label htmlFor="experienceWithPets" className="block text-gray-700 font-medium mb-1">
          Experience with Pets <span className="text-red-500">*</span>
        </label>
        <div className="mt-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="yes"
              checked={experienceWithPets === true}
              onChange={() => setExperienceWithPets(true)}
              className="form-radio h-4 w-4 text-indigo-600"
              required
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="no"
              checked={experienceWithPets === false}
              onChange={() => setExperienceWithPets(false)}
              className="form-radio h-4 w-4 text-indigo-600"
              required
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="otherPets" className="block text-gray-700 font-medium mb-1">
          Other Pets at Home <span className="text-red-500">*</span>
        </label>
        <select
          id="otherPets"
          className="form-select block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={otherPets}
          onChange={handleOtherPetsChange}
          required
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      </div>
      
      <div>
      {requiredFieldsError && (
        <p className="text-red-500 text-sm mt-1">{requiredFieldsError}</p>
      )}
    </div>

      <div>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-300 text-white py-2 px-4 rounded-md"
        disabled={formSubmitted}
        >
        Submit
      </button>
      </div>

    </form>
  );
};

export default Form;
