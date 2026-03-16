import { addZeroToNum } from "./helpers";

let timeInterval;

export function timer(id, deadline) {
  const containers = getTimerContainers(id);
  setTimerContent(containers, deadline);
  timeInterval = setInterval(() => setTimerContent(containers, deadline), 1000);
}

function getTimerContainers(selector) {
  const timer = document.querySelector(selector);
  return {
    daysContainer: timer.querySelector("#days"),
    hoursContainer: timer.querySelector("#hours"),
    minutesContainer: timer.querySelector("#minutes"),
    secondsContainer: timer.querySelector("#seconds"),
  };
}

function setTimerContent(containers, deadline) {
  const { daysContainer, hoursContainer, minutesContainer, secondsContainer } =
    containers;
  const { days, hours, minutes, seconds, total } = getRemainedTime(deadline);
  daysContainer.textContent = addZeroToNum(days);
  hoursContainer.textContent = addZeroToNum(hours);
  minutesContainer.textContent = addZeroToNum(minutes);
  secondsContainer.textContent = addZeroToNum(seconds);

  if (total <= 0) {
    daysContainer.textContent = "00";
    hoursContainer.textContent = "00";
    minutesContainer.textContent = "00";
    secondsContainer.textContent = "00";

    clearInterval(timeInterval);
  }
}

function getRemainedTime(deadline) {
  const t = Date.parse(deadline) - Date.parse(new Date()),
    seconds = Math.floor((t / 1000) % 60),
    minutes = Math.floor((t / (1000 * 60)) % 60),
    hours = Math.floor((t / (1000 * 60 * 60)) % 24),
    days = Math.floor(t / (1000 * 60 * 60 * 24));

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
