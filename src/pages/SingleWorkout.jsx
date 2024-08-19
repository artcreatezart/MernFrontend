import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeftShort } from 'react-bootstrap-icons'

const SingleWorkout = () => {
    const navigate = useNavigate()

  return (
    <>
        <button onClick={() => navigate(-1)} className='backButton'><span><ArrowLeftShort/></span>Go Back</button>
        <div>SingleWorkout</div>
    </>
  )
}

export default SingleWorkout
