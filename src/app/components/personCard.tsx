import React from "react";
import { Person } from "../types/peopleResponse";

interface PersonProps {
  person: Person;
}

const PersonCard: React.FC<PersonProps> = ({ person }) => {
  return (
    <div className="person-card">
      <img src={person.picture.large} />
      <h2>{`${person.name.title} ${person.name.first} ${person.name.last}`}</h2>
      <p><strong>Email:</strong> {person.email}</p>
      <p><strong>Celular:</strong> {person.cell}</p>
      <p><strong>Fecha de nacimiento:</strong> ({person.dob.date}) ({person.dob.age} años)</p>
      <p><strong>Dirección:</strong> {person.location.street.number} {person.location.street.name}</p>
      <p><strong>Contraseña:</strong> {person.login.password}</p>
    </div>
  );
};

export default PersonCard;
