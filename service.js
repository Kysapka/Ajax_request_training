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
    const promise =  axios.get('https://repetitora.net/api/JS/Tasks?widgetId=2134')
    return promise.then((response) => {
        return response.data;
    });
}

function createTasks(title) {
    const promise =  axios.post(`https://repetitora.net/api/JS/Tasks?widgetId=2134&title=${title}`)
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



