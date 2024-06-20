import{S as c,i}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="44426411-2b9aaab226d67ab5863731517";async function u(s){const o=`https://pixabay.com/api/?key=${d}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await(await fetch(o)).json()).hits}catch(t){throw console.error("Error fetching images:",t),t}}let l;function m(s){const o=document.getElementById("gallery");o.innerHTML=s.map(t=>`
        <li class="gallery-item">
            <a href="${t.largeImageURL}" class="gallery-link">
                <img src="${t.webformatURL}" alt="${t.tags}">
            </a>
            <div class="info">
                <p><strong>Likes:</strong> ${t.likes}</p>
                <p><strong>Views:</strong> ${t.views}</p>
                <p><strong>Comments:</strong> ${t.comments}</p>
                <p><strong>Downloads:</strong> ${t.downloads}</p>
            </div>
        </li>
    `).join(""),l?l.refresh():l=new c(".gallery a",{captionsData:"alt",captionDelay:250})}document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("search-form"),o=document.getElementById("search-input"),t=document.getElementById("loader");s.addEventListener("submit",async n=>{n.preventDefault();const e=o.value.trim();if(e===""){i.error({title:"Error",message:"Search query cannot be empty!"});return}t.style.display="block";try{const r=await u(e);r.length===0?i.error({title:"Sorry",message:"There are no images matching your search query. Please try again!"}):m(r)}catch{i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}finally{t.style.display="none"}})});
//# sourceMappingURL=commonHelpers.js.map
