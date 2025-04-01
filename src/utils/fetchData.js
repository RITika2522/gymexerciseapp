export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'd3eb572ccemsh7d057e45f56cf70p14dc97jsna6c2c406f5ea',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const fetchData = async (url, options) => {
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        const errorMessage = await response.text(); // Read error response
        throw new Error(`API Error: ${response.status} - ${response.statusText} | ${errorMessage}`);
      }
  
      const data = await response.json();
      console.log("Fetched Data:", data);
      return data;
  
    } catch (error) {
      console.error("Fetch Error:", error.message);
      throw error;
    }
  };
  