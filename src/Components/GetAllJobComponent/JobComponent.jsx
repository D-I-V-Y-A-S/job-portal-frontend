import React from 'react'
import './GetAllJobComponent.css'

const JobComponent = ({job}) => {
    return (
        <div className='card'>
            <div className="text-container">
                <h3>{job.jobTitle}</h3>
                <p className='status'> {job.jobID}</p>
                <p className='status'> {job.companyName}</p>
                <p className='author'>{job.location}</p>
                <p className="availability">{job.jobPreference}</p>
                <p className='author'>{job.jobSkills.map(skill => (skill)).join(', ')}</p>
            </div>
        </div>
    )
}
export default JobComponent

//oru component la certain block of code thirumbi thirumbi render achinaathu  whole component oda performance ah korachidum as rerender aarapo full code um aagum rerender so antha block of code ah nama Inga potrukom.
