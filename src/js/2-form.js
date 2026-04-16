const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

const formData = {
    email: "",
    message: ""
};
populateText();

form.addEventListener("input", handleInput);


function handleInput(event) {
    const { name, value } = event.target;

  formData[name] = value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function populateText() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
         const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
    }
};

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  const { email, message } = formData;

  if (email === "" || message === "") {
    alert("Fill please all fields");
    return;
  }
    
    console.log(formData);


  localStorage.removeItem(STORAGE_KEY);

  formData.email = "";
  formData.message = "";

  event.currentTarget.reset();
}


