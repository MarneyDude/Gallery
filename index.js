import{a as b,i as f,S as L}from"./assets/vendor-DtRopbQG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();let i=1,p=15;async function g(a,r=!1){r&&(i=1);const o=new URLSearchParams({key:"49255995-7f6d469d944259310339ef533",q:a,image_type:"photo",page:i,per_page:p,orientation:"horizontal",safesearch:!0});try{const s=await b.get("https://pixabay.com/api/",{params:o}),e=s.data.hits;let t=s.data.totalHits;return e.length===0?(E(),[]):(i*p<=t?z():D(),i+=1,e)}catch(s){return q(),console.error("Error fetching data:",s),[]}}function E(){f.show({title:"Sorry,",titleSize:"21",message:"there are no images matching your search query. Please try again!",position:"topRight",iconUrl:"https://www.svgrepo.com/show/340010/cloud-data-ops.svg",iconColor:"#ffffff",messageSize:"21",messageColor:"black"})}function q(){f.show({title:"Sorry,",titleSize:"21",message:"Error Fetching Data:",position:"topRight",iconUrl:"https://www.svgrepo.com/show/340010/cloud-data-ops.svg",iconColor:"#ffffff",messageSize:"21",messageColor:"black"})}function D(){_(),f.show({title:"Sorry,",titleSize:"21",message:"We're sorry, but you've reached the end of search results.",position:"topRight",iconUrl:"https://www.svgrepo.com/show/340010/cloud-data-ops.svg",iconColor:"#ffffff",messageSize:"21",messageColor:"black"})}function y(a,r){const o=a.map(({webformatURL:s,largeImageURL:e,tags:t,likes:l,views:w,comments:v,downloads:S})=>`<li class='gallery__item'>
              <div class='gallery__container '>
                <a href='${e}'>
                 
                    <span class=' loader-position loader '></span>
                    <img
                      class='gallery__image'
                      src='${s}'
                      alt='${t}'
                      onload="this.previousElementSibling.style.visibility = 'hidden';" 
                      onerror="this.previousElementSibling.visibility = 'hidden';" 
                    />
                 
                </a>

                <ul class='gallery_user-stats'>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Likes:<span>${l}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Views:<span>${w}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Comments:<span>${v}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Downloads:<span>${S}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </li>`).join("");r.insertAdjacentHTML("beforeend",o)}const h=new L(".gallery__container a"),x={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".js-gallery"),loadMoreButtonEl:document.querySelector(".js-load-more-button"),loader:document.querySelector(".loader")},{formEl:c,galleryEl:d,loadMoreButtonEl:m,loader:u}=x;let n="";c.addEventListener("submit",async a=>{if(a.preventDefault(),n=new FormData(c).get("input"),d.innerHTML="",_(),u.classList.remove("loader-hidden"),!n)return;const o=await g(n,!0).finally(()=>u.classList.add("loader-hidden"));y(o,d),h.refresh(),c.reset()});function z(){m.classList.add("display-visual")}function _(){m.classList.remove("display-visual")}m.addEventListener("click",async a=>{a.preventDefault();const r=await g(n).finally(()=>u.classList.add("loader-hidden"));y(r,d),h.refresh();const s=document.querySelector(".gallery__item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
