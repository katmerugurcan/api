const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const setData = {
    Get: async url => {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "Get",
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(responseJson => {
                    resolve(responseJson);
                }).catch(error => console.log("Error: ", error));
        });
    },
    Post: async (url, body) => {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "Post",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body
            }).then(reponse => reponse.json())
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                })
        });
    }
}

module.exports = setData;