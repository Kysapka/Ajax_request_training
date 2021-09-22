// function getImageOld(pageNumber, successCallback) {
//     let baseUrl = 'https://repetitora.net/api/JS/Images'
// const promise =  $.ajax(`${baseUrl}?page=${pageNumber}&count=1`)
//     return promise;
// }

function getImages(pageNumber) {
    let baseUrl = 'https://repetitora.net/api/JS/Images'
    const promise =  axios.get(`${baseUrl}?page=${pageNumber}&count=1`)
    return promise.then((response) => {
        return response.data;
    });
}

function getTasks() {
    const promise =  axios.get('https://repetitora.net/api/JS/Tasks?widgetId=2134&count=30')
    return promise.then((response) => {
        return response.data;
    });
}

function createTasks(title) {
    const promise =  axios.post('https://repetitora.net/api/JS/Tasks', {
        widgetId: 2134,
        title,
    })
    return promise.then((response) => {
        return response.data;
    });
}

function updateTasks(tId, title) {
    const promise =  axios.put('https://repetitora.net/api/JS/Tasks', {
        widgetId: 2134,
        taskId: tId,
        title,
    })
    return promise.then((response) => {
        return response.data;
    });
}

function deleteTask(id) {
    const promise =  axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=2134&taskId=${id}`)
    return promise.then((response) => {
        return response.data;
    });
}

// const func1 = (seconds) => {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, seconds)
//     })
//
//     promise.then(() => {
//         console.log('succsess', seconds)
//     })
// }
//
// func1(1000)
// func1(2000)
// func1(4000)



