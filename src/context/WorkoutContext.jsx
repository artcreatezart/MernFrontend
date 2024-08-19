// Imports
import { createContext, useReducer } from "react";

// Exports
export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload // update all the workouts to new workouts
            }
            case 'CREATE_WORKOUTS':
                return {
                    workouts: [action.payload, ...state.workouts]
                }
            case 'DELETE_WORKOUT':
                return {
                    workouts: state.workouts.filter((workout) => workout._id !== action.payload._id)
                }
            case 'UPDATE_WORKOUT': {
                const updatedWorkout = action.payload;
                const updatedWorkouts = state.workouts.map(workout => {
                    if (workout._id === updatedWorkout._id) {
                        // swap the workout for the new one if the id's match
                        return updatedWorkout
                    }

                    // return each workout
                    return workout
                });
                
                // return the map of updatedWorkouts
                return {
                    workouts: updatedWorkouts
                }
            }
            default: 
                return state
    }
}

// Set up context provider which
export const WorkoutsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    return (
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}