//** Promises */

const datas = [
  {
    name: "Bhavnish",
    Profession: "Software Engineer",
    age: 23,
  },
  {
    name: "Badal",
    Profession: "Frontend Developer",
    age: 22,
  },
];

const getDatas = () => {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `
        <h3>${data.name}  ${data.age}</h3>
        <p>${data.Profession}</p>

        `;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createData = (newData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newData);
      let error = true;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
};
createData({ name: "Yogesh", Profession: "Web developer", age: 45 })
  .then(getDatas)
  .catch(() => alert("Error"));
createData({ name: "Ved", Profession: "Backend Developer", age: 70 });
createData({ name: "Gyan", Profession: "Devops Engineer", age: 22 });
createData({ name: "Tots", Profession: "Cloud Architect", age: 21 });
