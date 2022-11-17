const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "What You are seeking?",
  "You are such a good fucker!",
  "Teri maa ki chut!",
  "Teri maa ki bhosda!",
  "Yo Motherfucker! Want to suck my dick?",
  "Ashis just stocked my github",
  "I love you, asshole!",
  "If you are bad, I am your dad!",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());

  notif.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
