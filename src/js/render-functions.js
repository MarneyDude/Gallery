export function renderGallery(imagesDataArray, gallery) {
  const markup = imagesDataArray
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class='gallery__item'>
              <div class='gallery__container '>
                <a href='${largeImageURL}'>
                 
                    <span class=' loader-position loader '></span>
                    <img
                      class='gallery__image'
                      src='${webformatURL}'
                      alt='${tags}'
                      onload="this.previousElementSibling.style.visibility = 'hidden';" 
                      onerror="this.previousElementSibling.visibility = 'hidden';" 
                    />
                 
                </a>

                <ul class='gallery_user-stats'>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Likes:<span>${likes}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Views:<span>${views}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Comments:<span>${comments}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Downloads:<span>${downloads}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </li>`;
      },
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
