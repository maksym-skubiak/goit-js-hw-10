import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const s=document.querySelector(".form"),n=s.querySelector('input[name="delay"]'),m=s.querySelectorAll('input[name="state"]');s.addEventListener("submit",function(o){var i;o.preventDefault();const t=Number(n.value),r=(i=Array.from(m).find(e=>e.checked))==null?void 0:i.value;if(isNaN(t)||t<=0){iziToast.error({title:"Error",message:"Please enter a valid delay (positive number)."});return}new Promise((e,l)=>{setTimeout(()=>{r==="fulfilled"?e(t):l(t)},t)}).then(e=>{iziToast.success({title:"✅ Fulfilled",message:`Fulfilled promise in ${e}ms`}),console.log(`✅ Fulfilled promise in ${e}ms`)}).catch(e=>{iziToast.error({title:"❌ Rejected",message:`Rejected promise in ${e}ms`}),console.log(`❌ Rejected promise in ${e}ms`)})});
//# sourceMappingURL=2-snackbar.js.map
