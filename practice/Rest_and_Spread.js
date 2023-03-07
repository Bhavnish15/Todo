//* Rest Operator
var arr = [
  "badal",
  "yogi",
  "prabhu",
  "Shankar",
  "tanu",
  "shyam",
  "Ram",
  "Anuj",
];
var num = [1, 2, 3, 4, 5];

const f1 = (...spread) => {
  console.log(...spread); //* spead
};
f1(...arr); //* rest
f1(...num);

//** REST Operator
var car = {
  name: "BMW",
  version: "old",
  specifications: ["petrol", "Autobreak", "AutoMatic"],
};
const { ...rest } = car;
console.log(rest);
