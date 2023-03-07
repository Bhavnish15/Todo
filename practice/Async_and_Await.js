//** Async and Await */

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
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
};

async function Data() {
  await createData({ name: "Yogesh", Profession: "Web developer", age: 45 });
  getDatas();
}
Data();
