// useLogin hook to use to do our api call\

import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const login = async (email, password) => {
        setIsLoading (true)
        setError(null)

        try {
            const response = await axios.post(`${baseURL}/api/user/login`,
            {email, password},
            {headers: {'Content-Type': 'application/json'}}
            
            )

            if (response.status !== 200) {
                setIsLoading(false)
                setError(error.response.data.error)
            }

            if (response.status === 200) {
                // save user to local storage
                localStorage.setItem('user', JSON.stringify(response.data))
                // update auth context(state)
                dispatch({type: 'LOGIN', payload: response.data})

                setIsLoading(false)
            }

        } catch (error) {
            console.error(error.response.data.error)
            setError(error.response.data.error)
            setIsLoading(false)
        }
    }

    return {login, isLoading, error}
}

