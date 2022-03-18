import { useState } from "react";
import { projectAuth } from "../firebase/config";

useState;

export const useSignup = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(false);
    setIsLoading(true);
    try {
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response.user);

      if (!response) {
        throw new Error("Coudn't not complete signup");
      }

      await response.user.updateProfile({
        displayName,
      });

      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsLoading(false);
    }
  };

  return { error, isLoading, signup };
};
