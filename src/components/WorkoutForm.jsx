import { useState } from 'react'
import axios from 'axios';

const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefualt();
        // set up object to send to the database
        const workout = {title, load, reps}

        // HTTP Request 
        try {
            const response = await axios.post('http:/localhost:4000/api/workouts/', workout, {
                headers : {
                    'Content-Type': 'application/json'
                }
            });
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            console.log('new workout added', response.data)
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <form className='create'>
        <h3>Add A New Workout</h3>

        <label >Exercise Title:</label>
        <input 
            type = 'text'
            onChange = {(e) => setTitle(e.target.value)}
            value = {title}
        />

        <label>Load (in kg):</label>
        <input 
            type = 'number'
            onChange = {(e) => setLoad(e.target.value)}
            value = {load}
        />

        <label>Reps: </label>
        <input 
            type = 'number'
            onChange = {(e) => setReps(e.target.value)}
            value = {reps}
        />

        <button>Add Workout</button>
        {error && <div className='error'>{error}</div>}

    </form>
  )
}

export default WorkoutForm
