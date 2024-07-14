import{i as p,S as l}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function u(s){return s.map(({webformatURL:t,largeImageURL:i,tags:n,likes:e,views:r,comments:a,downloads:c})=>`<li class="item-imagesList js-item-imagesList">
        <a href="${i}">
            <img src="${t}" alt="${n}" width = "360"/>
             </a>
            <div>
                <span>
                  <p><b>Likes</b></p>
                  <p>${e}</p>
                </span>
        
                <span>
                  <p><b>Views</b></p>
                  <p>${r}</p>
                </span>
                <span>
                  <p><b>Comments</b></p>
                  <p>${a}</p>
                </span>
                <span>
                  <p><b>Downloads</b></p>
                  <p>${c}</p>
                </span>
            </div>
       
      </li>`).join("")}const m="44929551-fd3f3fb9d8ead760ff0c5783d";function f(s){o.loader.style.display="inline-block",fetch(`https://pixabay.com/api/?key=${m}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(({hits:t})=>{if(o.loader.style.display="none",t.length===0){p.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}o.imagesList.insertAdjacentHTML("afterbegin",u(t));const i=new l(".js-imagesList a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});i.on("show.simplelightbox",n=>{n.preventDefault()}),i.refresh()}).catch(t=>console.error(t))}const o={form:document.querySelector(".js-searchForm"),serchInput:document.querySelector(".js-searchInput"),searchBtn:document.querySelector(".js-searchBtn"),imagesList:document.querySelector(".js-imagesList"),loader:document.querySelector(".loader")};o.form.addEventListener("submit",d);function d(s){s.preventDefault(),o.imagesList.innerHTML="",o.serchInput.value.trim()!==""&&f(o.serchInput.value.trim().toLowerCase())}
//# sourceMappingURL=commonHelpers.js.map
