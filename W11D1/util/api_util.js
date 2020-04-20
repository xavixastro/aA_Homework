const GIPHY_APY = "9YRnMvD4aVSyfyyn99NgOC4RO7uLm28k";

export const fetchSearchGiphys = (searchTerm) => {
    return $.ajax ({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${GIPHY_APY}&limit=2`
    })
}

