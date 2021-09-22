
const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number")
const getImagesButton = document.querySelector("#get-images");
const getTasksButton = document.querySelector('#get-tasks')
const createTasksButton = document.querySelector('#create-tasks')

getImagesButton.addEventListener("click", () => {
    const promise = getImages(pageNumberEl.value);
    promise.then(onImagesReceived)
});

getTasksButton.addEventListener("click", () => {
    const promise = getTasks();
    promise.then(onTasksReceived)
});

createTasksButton.addEventListener("click", () => {
    createTasks('Learn CSS');
});

function onImagesReceived(images) {
        images.forEach(image => {
            const img = document.createElement('img')
            img.src = image.thumbnail;
            document.querySelector("#tasks-result").appendChild(img)
        });
}

function onTasksReceived(tasks) {
    tasks.forEach(task => {
        const li = document.createElement('li')
        li.innerHTML = task.title;
        document.querySelector("#result").appendChild(li)
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

