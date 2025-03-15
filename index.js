import{a as w,i as u,S as b}from"./assets/vendor-DtRopbQG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();class L{constructor(){this.searchQuery="",this.page=1,this.perPage=15,this.apiKey="49255995-7f6d469d944259310339ef533",this.baseURL="https://pixabay.com/api/"}async fetchImages(){const s=new URLSearchParams({key:this.apiKey,q:this.searchQuery,image_type:"photo",page:this.page,per_page:this.perPage,orientation:"horizontal",safesearch:!0});try{const r=await w.get(this.baseURL,{params:s}),{hits:t,totalHits:e}=r.data;return t.length===0?(this.showToast("Sorry,","There are no images matching your search query. Please try again!","warning"),{hits:[],totalHits:0}):(this.page+=1,{hits:t,totalHits:e})}catch(r){return console.error("Error fetching data:",r),this.showToast("Error","fetching data. Please try again later.","error"),{hits:[],totalHits:0}}}reset(){this.page=1}setQuery(s){this.searchQuery=s,this.reset()}showToast(s,r,t="info"){u.show({backgroundColor:"#f36f07",title:s,titleSize:20,message:r,position:"topRight",iconUrl:"https://www.svgrepo.com/show/340010/cloud-data-ops.svg",iconColor:"#ffffff",messageSize:"20",messageColor:"black",timeout:3e3,class:t})}}const g=document.querySelector(".js-gallery");let v=new b(".gallery__container a");function p(o){const s=o.map(({webformatURL:r,largeImageURL:t,tags:e,likes:a,views:i,comments:m,downloads:_})=>`
          <li class="gallery__item">
            <div class="gallery__container">
              <a href="${t}">
                <img 
                  class="gallery__image"
                  src="${r}"
                  alt="${e}"
                  loading="lazy"
                />
              </a>
              <ul class="gallery_user-stats">
                <li class="gallery__user-stats-item">
                  <p class="gallery__user-stats-text">Likes: <span>${a}</span></p>
                </li>
                <li class="gallery__user-stats-item">
                  <p class="gallery__user-stats-text">Views: <span>${i}</span></p>
                </li>
                <li class="gallery__user-stats-item">
                  <p class="gallery__user-stats-text">Comments: <span>${m}</span></p>
                </li>
                <li class="gallery__user-stats-item">
                  <p class="gallery__user-stats-text">Downloads: <span>${_}</span></p>
                </li>
              </ul>
            </div>
          </li>`).join("");g.insertAdjacentHTML("beforeend",s),v.refresh()}function S(){g.innerHTML=""}const n=document.querySelector(".form"),c=document.querySelector(".js-load-more-button"),f=document.querySelector(".loader"),l=new L;n.addEventListener("submit",async o=>{o.preventDefault();const r=new FormData(n).get("input").trim();if(!r)return;l.setQuery(r),S(),d();const{hits:t,totalHits:e}=await l.fetchImages();y(),t.length>0&&(p(t),h(l,c,e)),n.reset()});c.addEventListener("click",async o=>{o.preventDefault(),d();const{hits:s,totalHits:r}=await l.fetchImages();y(),s.length>0&&(p(s),h(l,c,r));const t=document.querySelector(".gallery__item");if(t){const{height:e}=t.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}});function h(o,s,r){const t=(o.page-1)*o.perPage<r;s.classList.toggle("display-On-Of",t),t||u.show({backgroundColor:"#008ae9",title:"We're sorry",titleSize:20,message:"but you've reached the end of search results",position:"topRight",iconUrl:"https://www.svgrepo.com/show/340010/cloud-data-ops.svg",iconColor:"#ffffff",messageSize:"20",messageColor:"black",timeout:3e3})}function d(){f.classList.remove("js-loader")}function y(){f.classList.add("js-loader")}
//# sourceMappingURL=index.js.map
