function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector(".form");l.addEventListener("submit",(t=>{t.preventDefault();const n=Number(l.querySelector('input[name="delay"]').value),o=Number(l.querySelector('input[name="step"]').value),i=Number(l.querySelector('input[name="amount"]').value);if(isNaN(n)||isNaN(o)||isNaN(i))return void e(r).Notify.failure("Please enter valid numbers.");let u=n;const a=(e,t)=>new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}));for(let t=1;t<=i;t++)a(t,u).then((({position:t,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),u+=o}));
//# sourceMappingURL=03-promises.52f7486e.js.map
