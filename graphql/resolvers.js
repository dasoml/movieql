const kkamange = {
  name: "까망이",
  age: 8,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => kkamange,
  },
};

export default resolvers;
