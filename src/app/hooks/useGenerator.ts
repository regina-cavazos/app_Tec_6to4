import { useState, useEffect } from "react";
import { Person } from "../types/peopleResponse";

const useGeneratePerson = () => {
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPerson = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();

      if (data.results.length > 0) {
        setPerson(data.results[0]);
      } else {
        throw new Error("No se encontraron datos");
      }
    } catch (err) {
      setError("Error al obtener datos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  return { person, loading, error, fetchPerson };
};

export default useGeneratePerson;
