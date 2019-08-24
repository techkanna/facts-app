const factDate = document.querySelector(".fact-three");
const factTextDate = document.querySelector("#fact-text-three");

const inputDate = document.querySelector(".date");
const errDate = document.querySelector(".err-three");

const factYear = document.querySelector(".fact-two");
const factTextYear = document.querySelector("#fact-text-two");

const inputYear = document.querySelector(".year");
const errYear = document.querySelector(".err-two");

const factNumber = document.querySelector(".fact-one");
const factTextNumber = document.querySelector("#fact-text-one");

const inputNumber = document.querySelector(".number");
const errNumber = document.querySelector(".err-one");

document.querySelector("#form-three").addEventListener("submit", getFactDate);

document.querySelector("#form-two").addEventListener("submit", getFactYear);

document.querySelector("#form-one").addEventListener("submit", getFactNumber);

function getFactDate(e) {
  e.preventDefault();
  const number = inputDate.value;
  if (inputDate.value != "") {
  fetch("http://numbersapi.com/" + number + "/date")
    .then(res => res.text())
    .then(data => {
      
        factDate.style.display = "block";
        factTextDate.innerText = data;
      
    })
	
    .catch(error => {
      errDate.style.display = "block";
      errDate.innerHTML = `
        <p>Oops! server returns error!,try this again or click F12 to see error details.</p><button class="closeDate">X</button><small>click this button for close this error msg<small>
        `;
      console.log(error);
      document
        .querySelector(".closeDate")
        .addEventListener("click", () => (errDate.style.display = "none"));
    });
	}
}

function getFactYear(e) {
  e.preventDefault();
  const number = inputYear.value;
  if (inputYear.value != "") {
  fetch("http://numbersapi.com/" + number + "/year")
    .then(res => res.text())
    .then(data => {
      
        factYear.style.display = "block";
        factTextYear.innerText = data;
      
    })
	
    .catch(error => {
      errYear.style.display = "block";
      errYear.innerHTML = `
        <p>Oops! server returns error!, try this again or click F12 to see error details.</p><button class="closeYear">X</button><small>click this button for close this error msg<small>
        `;
      console.log(error);
      document
        .querySelector(".closeYear")
        .addEventListener("click", () => (errYear.style.display = "none"));
    });
	}
}

function getFactNumber(e) {
  e.preventDefault();
  const number = inputNumber.value;
  if (inputNumber.value != "") {
  fetch("http://numbersapi.com/" + number)
    .then(res => res.text())
    .then(data => {
      
        factNumber.style.display = "block";
        factTextNumber.innerText = data;
     
    })
	 
    .catch(error => {
      errNumber.style.display = "block";
      errNumber.innerHTML = `
        <p>Oops! server returns error!,try this again or click F12 to see error details.</p><button class="closeNumber">X</button><small>click this button for close this error msg<small>
        `;
      console.log(error);
      document
        .querySelector(".closeNumber")
        .addEventListener("click", () => (errNumber.style.display = "none"));
    });
	}
}

// function getFactAjax() {
//   const number = inputNumber.value;
//   const hxr = new XMLHttpRequest();
//   hxr.open("GET", "http://numbersapi.com/" + number, true);
//   hxr.onload = function() {
//     if (this.status == 200 && number != "") {
//       fact.style.display = "block";
//       factText.innerText = this.responseText;
//     }
//   };
//   hxr.send();
// }
