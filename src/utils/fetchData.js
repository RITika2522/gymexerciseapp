export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const reviewData = await response.json();
    const data = await response.json();
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return data;
}