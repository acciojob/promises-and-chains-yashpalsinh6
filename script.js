//your JS code here. If required.
function submitForm() {
  const name = document.getElementById('name').value;
  const age = parseInt(document.getElementById('age').value, 10);
  
  // if (name.trim() === "" || isNaN(age)) {
  //   alert("Both name and age fields must be filled out.");
  //   return;
  // }

  ageValidationPromise(name, age).then(message => {
    alert(message);
  }).catch(message => {
    alert(message);
  });
}

function ageValidationPromise(name, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry, ${name}. You aren't old enough.`);
      }
    }, 4000); // wait for 4 seconds
  });
}

