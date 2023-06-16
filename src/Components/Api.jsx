import axios from "axios";

const getData = async (term) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID oIsmxXVX3b4fGJ1TWyT2HbovZg9BZWPChLVAzANcwds",
      },
      params: {
        query: term,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export default getData;
