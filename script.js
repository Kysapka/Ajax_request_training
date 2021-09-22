
const pageNumberEl = document.querySelector("#page-number")
const changeTitleEl = document.querySelector("#change-title")
const getImagesButton = document.querySelector("#get-images");
const getTasksButton = document.querySelector('#get-tasks')
const createTasksButton = document.querySelector('#create-tasks')
const updateTasksButton = document.querySelector('#update-tasks')
const deleteTasksButton = document.querySelector('#delete-tasks')

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

updateTasksButton.addEventListener("click", () => {
    const title = changeTitleEl.value
    updateTasks('fd0899ad-9831-4c72-9d87-db34816b111c',title);
});

deleteTasksButton.addEventListener("click", () => {
    deleteTask('bc13c5c3-954c-49cc-be45-8e2704915f3e');
});

function onImagesReceived(images) {
        images.forEach(image => {
            const img = document.createElement('img')
            img.src = image.thumbnail;
            document.querySelector("#tasks-result").appendChild(img)
        });
}

function onTasksReceived(tasks) {
    const result = document.querySelector("#tasks-result");
    result.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li')
        li.innerHTML = task.title;
        result.appendChild(li)
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

