import { useState, useContext } from "react";
import { AuthContext } from "@/Context/authContext";
import axios from "axios";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useContext(AuthContext);

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post("http://localhost:5000/api/user/login", {
                email,
                password
            });

            if (response.data) {
                // Save user to local storage
                localStorage.setItem('user', JSON.stringify(response.data));

                // Update auth context
                dispatch({ type: 'LOGIN', payload: response.data });

                setIsLoading(false);
                return true;
            }
        } catch (error) {
            setError(error.response?.data?.error || 'Login failed');
            setIsLoading(false);
            return false;
        }
    };

    return { login, isLoading, error };
};
