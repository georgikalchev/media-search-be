function transformResponse (response) {
  if (response) {
    const items = transformItems(response.items)
    return {
      pageData: {type: 'VIDEO', nextPage: response.nextPageToken},
      items
    }
  }
  return {
    pageData: {type: 'VIDEO'},
    items: []
  }
}

const transformItems = (items) => {
  return items.map(item => {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnails: item.snippet.thumbnails
    }
  })
}

module.exports = {
  transformResponse
}