import { AddUser, GetAllUserAccounts } from "./svc.js";

const setUpForm = () => {
    const formElement = document.getElementById("userCreationForm");
    formElement.addEventListener("submit", async (e) => {
        e.preventDefault();
        const username = document.getElementById("userName").value;
        await AddUser(username);

        document.getElementById("usersContainer").replaceChildren();
        await renderUserAccounts();
    });
};

const renderUserAccounts = async () => {
  const userAccounts = await GetAllUserAccounts();

  const container = document.getElementById("usersContainer");

  userAccounts.forEach((user) => {
    console.log(user);
    const userCard = document.createElement("div");
    userCard.textContent = `${user.userName} - ${user.id}`;
    container.appendChild(userCard);
  });
};

setUpForm();
renderUserAccounts();