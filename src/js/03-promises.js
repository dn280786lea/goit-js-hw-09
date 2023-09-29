import Notiflix from 'notiflix';

const refs = {
form : document.querySelector('.form'),
buttonSb : document.querySelector('button'),
delay: document.querySelector('input[name="delay"]'),
step: document.querySelector('input[name="step"]'),
amount: document.querySelector('input[name="amount"]'),
 
};
refs.form.addEventListener('submit', handlebuttonSbClick)





function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        resolve({ position, delay })
      }
    }, delay
  )})
  return promise;

}


function handlebuttonSbClick(evt) {
  evt.preventDefault();
  const firstDelay  = Number(refs.delay.value);
  const firststep = Number(refs.step.value);
  const firstamount = Number(refs.amount.value);


let delayNew = firstDelay;
for(let i = 1; i <= firstamount; i++ ) {
  delayNew += firststep
createPromise(i, delayNew)
  .then(({ position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({error}) => {
   Notiflix.Notify.failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
  });
}
 
}

