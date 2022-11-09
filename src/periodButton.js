const periodButtons = document.getElementsByClassName("btn-period");

export const buttonState = {};

const setActive = (activeName) => {
  for (const button of periodButtons) {
    buttonState[button.name] = activeName === button.name;
    activeName === button.name
      ? button.classList.add("active")
      : button.classList.remove("active");
  }
  if (!activeName) return;
  const periodSpan = document.getElementsByClassName("SELECTED_PERIOD");

  console.log({ activeName, periodSpan });
  for (const span of periodSpan) {
    span.innerHTML = activeName;
  }
};

setActive();

for (const button of periodButtons) {
  console.log(button.name);
  buttonState[button.name] = false;
  button.addEventListener("click", onClickPeriod);
}

function onClickPeriod(e) {
  const name = e?.target?.name;
  if (!name) return;
  setActive(name);
}
