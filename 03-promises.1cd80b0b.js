function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var u=r("7Y9D8");const i={form:document.querySelector(".form"),buttonSb:document.querySelector("button"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};function l(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random();o({position:e,delay:t})}),t)}))}i.form.addEventListener("submit",(function(t){t.preventDefault();const o=Number(i.delay.value),n=Number(i.step.value),r=Number(i.amount.value);let a=o;for(let t=1;t<=r;t++)a+=n,l(t,a).then((({position:t,delay:o})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({error:t})=>{e(u).Notify.failure(`❌ Rejected promise ${t.position} in ${t.delay}ms`)}))}));
//# sourceMappingURL=03-promises.1cd80b0b.js.map
