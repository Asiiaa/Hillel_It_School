const API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10';

const $owl = $('#gallery');
const imgScript = $('#imgScriptCollection').html();

init();

function init() {
    fetchImg().then(() => {
        $owl.find('a').simpleLightbox({
            fileExt: '',
        });
    });
}

function fetchImg() {
    return fetch(API_URL)
        .then((resp) => resp.json())
        .then(renderImg)
}

function renderImg(imgList) {
    // const imgs = imgList.map(generateItemHtml).join('');
    $owl.html(imgList.map(generateItemHtml).join(''))

    // $owl.append(imgs);
}

function generateItemHtml(imgList) {
    // return imgScript
    // .replaceAll('{thumbnailUrl}', thumbnailUrl)
    // .replaceAll('{url}', url);

    return interpolate(imgScript, imgList)
}
