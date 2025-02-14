import { useState } from "react";
import { AuthContext } from "@/Context/authContext";
import { IoBody } from "react-icons/io5";

export const useSignup = () => {
    const [error,setError] = useState();
    const [isLoading,setIsLoading] = useState();
    const {dispatch } = useContext(AuthContext);

    const signup = async (name,email,password) => {
        setIsLoading(true);
        setError(null);

        const response = await axios.post('/api/user/signup',{
            headers: {'content-type': 'application/json'},
            body: { name,email,password }
        })

        const json = response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }

        if (response.ok) {
            //save the user to lacal storage to prevent lose of user data on refresh the page.
            localStorage.setItem('user', JSON.stringify(json));

            //update the auth context.
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false);
        }
    }
        return {signup, isLoading, error};
}