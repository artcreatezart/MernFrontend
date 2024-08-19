import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault() //stop page refresh

        await signup(email,password) // api call + local storage
    }
  return (
    <form className='signup' onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <label>Email</label>
        <input 
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            valuse={email}
        />

        <label>Password</label>
        <input 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            valuse={password}
        />

        <button disabled={isLoading}>Sign Up</button>
        {error && <div className='error'>{error}</div>}

    </form>
  )
}

export default Signup
