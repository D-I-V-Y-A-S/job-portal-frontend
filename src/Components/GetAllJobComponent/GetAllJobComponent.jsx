import React, { useEffect, useState } from 'react'
import JobComponent from './JobComponent'
import axios from 'axios'
import './GetAllJobComponent.css'

const GetAllJobComponent = () => {
    const [job, setjob] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3500/api/v1/job')
            .then(response => setjob(response.data))
            .catch(error => console.log(error.response.message))
    }, [])
    return (
        <React.Fragment>
            <div className='books'>
                {job && job.map((job, index) => (
                    <JobComponent job={job} key={index} />
                ))}
            </div>
        </React.Fragment>
    )
}

export default GetAllJobComponent