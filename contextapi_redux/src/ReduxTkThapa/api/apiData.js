import Chance from "chance";

const chance = Chance();

//it is a function  not component, if component then start with capital lettter
export const fakeUserData = () => {
  console.log(chance.name({ middle: true }));
  return chance.name({ middle: true });
};
//fakeUserData()
