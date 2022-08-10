// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const imgGallery = createImgGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgGallery);




// render function
function createImgGallery (items) {
    return items.map(({preview, original, description}) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`
      }).join('');   
};


// simpleLightBox
let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: 'outside',
    
  });


