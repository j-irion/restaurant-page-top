export function renderContact() {
  let content = document.getElementById("content");
  content.innerHTML = "";

  let contactDiv = document.createElement("div");
  contactDiv.id = "contactDiv";
  content.appendChild(contactDiv);

  //Create address
  let address = document.createElement("div");
  address.id = "address";
  contactDiv.appendChild(address);

  let addressHeading = document.createElement("h2");
  addressHeading.textContent = "Mail Address";
  address.appendChild(addressHeading);

  let addressContent = document.createElement("p");
  addressContent.textContent =
    "Ben Franklin 123 Sugarcane Lane, Candyville, Texas";
  address.appendChild(addressContent);

  //Create phone number
  let tel = document.createElement("div");
  tel.id = "tel";
  contactDiv.appendChild(tel);

  let telHeading = document.createElement("h2");
  telHeading.textContent = "Phone Number";
  tel.appendChild(telHeading);

  let telContent = document.createElement("span");
  telContent.textContent = "202-555-0191";
  tel.appendChild(telContent);

  //Create Email address
  let email = document.createElement("div");
  email.id = "email";
  contactDiv.appendChild(email);

  let emailHeading = document.createElement("h2");
  emailHeading.textContent = "E-Mail Address";
  email.appendChild(emailHeading);

  let emailContent = document.createElement("span");
  emailContent.textContent = "contact@awesome-restaurant.com";
  email.appendChild(emailContent);
}
