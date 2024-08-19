import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

     // checking if we are inside the WorkoutContextProvider
     if (!context) {
        throw Error('useWorkoutsContext hook must be used inside of WorkoutsContextProvider')
     }

    return context
}