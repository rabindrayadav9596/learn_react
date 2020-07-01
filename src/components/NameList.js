import React from "react";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 1,
      name: "Clark",
      age: 25,
      skill: "Ang",
    },
    {
      id: 1,
      name: "BrRobuce",
      age: 3,
      skill: "Vue",
    },
  ];
  const names = ["rabin", "swopns", "belly"];
  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
  return <div>{nameList}</div>;
}

export default NameList;
