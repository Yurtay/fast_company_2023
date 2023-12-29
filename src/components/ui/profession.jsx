import React from "react";
import { useProfessions } from "../../app/hooks/useProfession";

const Profession = ({ id }) => {
  const { isLoading, getProfession } = useProfessions();
  const prof = getProfession(id);
  if (!isLoading) {
    return <p>{prof.name}</p>;
  } else return "Loading...";
};

export default Profession;
