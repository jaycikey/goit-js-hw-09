import Notiflix from "notiflix";

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const delayInput = Number(form.querySelector('input[name="delay"]').value);
  const stepInput = Number(form.querySelector('input[name="step"]').value);
  const amountInput = Number(form.querySelector('input[name="amount"]').value);

  if (isNaN(delayInput) || isNaN(stepInput) || isNaN(amountInput)) {
    Notiflix.Notify.failure("Please enter valid numbers.");
    return;
  }

  let currentDelay = delayInput;

  const createPromise = (position, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  };

  for (let i = 1; i <= amountInput; i++) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    currentDelay += stepInput;
  }
});
