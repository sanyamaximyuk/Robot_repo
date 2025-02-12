async function fetchData() {
    const primaryUrl = 'https://nonexistent-api.com/data';
    const fallbackUrl = 'https://nonexistent-api2.typicode.com/posts';

    try {
        const response = await fetch(primaryUrl);
        if (!response.ok) {
            throw new Error(`Server error:`);
        }
        return await response.json();
    } catch (error) {
        console.warn('Switch to next server', error.message);
        try {
            const fallbackResponse = await fetch(fallbackUrl);
            if (!fallbackResponse.ok) {
                throw new Error(`Server error again:`, fallbackResponse);
            }
            return await fallbackResponse.json();
        } catch  {
            throw new Error('Two servers are unavailable');
        }
    }
}


fetchData()
    .then(data => console.log('Received data:', data))
    .catch(error => console.error('Fatal error:', error.message));
