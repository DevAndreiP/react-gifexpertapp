export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=hSosp9haNBbtCIIpviKDoSJZVRSSt4av&q=${category}&limit=20`
    const response = await fetch(url)
    const { data } = await response.json()
    const gifs = data.map(image => {
      return {
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
      }
    })
   return gifs
  }