async function getData() {
    const response = await fetch('https://api.github.com/users/octocat');
    console.log('response:', response);

    const json = await response.json();
    console.log('body:', json);

    return json;
}

async function handleData() {
    const data = await getData();
    console.log('Data:', data);
}

(async () => {
    console.log('before start');

    await handleData();

    console.log('after start');
})();
