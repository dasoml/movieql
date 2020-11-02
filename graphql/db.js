export const people = [
  {
    id: 1,
    name: "까망이",
    age: 8,
    gender: "male",
  },
  {
    id: 2,
    name: "까실이",
    age: 9,
    gender: "female",
  },
  {
    id: 3,
    name: "마루",
    age: 3,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => people.id === id);
  return filteredPeople[0];
};
