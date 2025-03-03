"use client";

import React from "react";
import useGeneratePerson from "./hooks/useGenerator";
import PersonCard from "./components/personCard";

export default function Home() {
  const { person, loading, error, fetchPerson } = useGeneratePerson();

  return (
    <div className="app">
      <h1>Generador de Personas Aleatorias</h1>
      <button className=""onClick={fetchPerson}>Generar Nueva Persona</button>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {person && <PersonCard person={person} />}
    </div>
  );
}
