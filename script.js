
const resultBlock = document.querySelector("#result");
const clickMeButton = document.querySelector("#click-me");
clickMeButton.addEventListener("click", makeRequest);

pageNumberEl = document.querySelector("#page-number")



function makeRequest() {
    let baseUrl = 'https://repetitora.net/api/JS/Images'
    $.ajax(`${baseUrl}?page=${pageNumberEl.value}`, {
        success: (data) => {
            data.forEach(el => {
                const img = document.createElement('img')
                img.src = el.thumbnail;
                document.querySelector("#result").appendChild(img)
            })
        }
    });
}






// let xhr = new XMLHttpRequest();
// console.log('new xhr', xhr)
// xhr.open('GET', 'https://repetitora.net/api/JS/Images', false);
// xhr.send();
//
// if (xhr.status != 200) {
//     alert( xhr.status + ': ' + xhr.statusText );
// } else {
//     console.log(xhr.response)
// }

