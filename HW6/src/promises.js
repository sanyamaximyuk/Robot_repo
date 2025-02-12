function getData() {
    return fetch('https://api.github.com/users/octocat')
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                handleData(data);
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

function handleData(resp) {
    console.log('Data:', resp);
}

getData();
