import{a as u,S as d,i as p}from"./assets/vendor-DU6yh4ar.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function m(s){return u.get("https://pixabay.com/api/",{params:{key:"49255995-7f6d469d944259310339ef533",q:s,image_type:"photo",per_page:200,orientation:"horizontal",safesearch:!0}})}const g=new d(".gallery__container a"),f=s=>{s.preventDefault();const o=new FormData(s.target).get("input"),r=document.querySelector(".loader");r.classList.remove("loader-hidden"),m(o).then(e=>{const t=document.querySelector(".js-gallery"),i=e.data.hits;h(i,t)}).catch(e=>{r.classList.remove("loader-hidden"),console.error("Error fetching data:",e)}).finally(()=>{r.classList.add("loader-hidden")}),s.target.reset()};function y(){p.show({title:"Sorry,",titleSize:"21",message:"there are no images matching your search query. Please try again!",position:"topRight",iconUrl:"https://www.svgrepo.com/show/340010/cloud-data-ops.svg",iconColor:"#ffffff",messageSize:"21",messageColor:"black"})}function h(s,a){s.length===0&&y(),a.innerHTML="";const o=s.map(({webformatURL:r,largeImageURL:e,tags:t,likes:i,views:l,comments:n,downloads:c})=>`<li class='gallery__item'>
              <div class='gallery__container '>
                <a href='${e}'>
                 
                    <span class=' loader-position loader '></span>
                    <img
                      class='gallery__image'
                      src='${r}'
                      alt='${t}'
                      onload="this.previousElementSibling.style.visibility = 'hidden';" 
                      onerror="this.previousElementSibling.visibility = 'hidden';" 
                    />
                 
                </a>

                <ul class='gallery_user-stats'>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Likes:<span>${i}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Views:<span>${l}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Comments:<span>${n}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Downloads:<span>${c}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </li>`).join("");a.innerHTML=o,g.refresh()}const _=document.querySelector(".form");_.addEventListener("submit",f);
//# sourceMappingURL=index.js.map
