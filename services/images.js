const transformResponse = (data) => {
  const queryInfo = data.queries.nextPage[0]
  const items = transformItems(data.items)
  return {
    pageData: {
      type: 'IMAGE',
      nextPage: queryInfo.startIndex,
      totalResults: queryInfo.totalResults
    },
    items
  }
}
const transformItems = (items) => {
  return items.map(item => {
    return {
      title: item.title,
      image: {
        link: item.link,
        width: item.image.width,
        height: item.image.height
      },
      thumbnail: item.image.thumbnailLink,
      thumbnailHeight: item.image.thumbnailHeight,
      thumbnailWidth: item.image.thumbnailWidth
    }
  })
}
const response = {
  'kind': 'customsearch#search',
  'url': {
    'type': 'application/json',
    'template': 'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json'
  },
  'queries': {
    'request': [
      {
        'title': 'Google Custom Search - liverpool',
        'totalResults': '1130000000',
        'searchTerms': 'liverpool',
        'count': 10,
        'startIndex': 1,
        'inputEncoding': 'utf8',
        'outputEncoding': 'utf8',
        'safe': 'off',
        'cx': '018169042693788811254:rzimehcdggw',
        'searchType': 'image'
      }
    ],
    'nextPage': [
      {
        'title': 'Google Custom Search - liverpool',
        'totalResults': '1130000000',
        'searchTerms': 'liverpool',
        'count': 10,
        'startIndex': 11,
        'inputEncoding': 'utf8',
        'outputEncoding': 'utf8',
        'safe': 'off',
        'cx': '018169042693788811254:rzimehcdggw',
        'searchType': 'image'
      }
    ]
  },
  'context': {
    'title': 'Google'
  },
  'searchInformation': {
    'searchTime': 0.611282,
    'formattedSearchTime': '0.61',
    'totalResults': '1130000000',
    'formattedTotalResults': '1,130,000,000'
  },
  'items': [
    {
      'kind': 'customsearch#result',
      'title': 'Liverpool F.C. - Wikipedia',
      'htmlTitle': '\u003cb\u003eLiverpool\u003c/b\u003e F.C. - Wikipedia',
      'link': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png',
      'displayLink': 'en.wikipedia.org',
      'snippet': 'Liverpool F.C. - Wikipedia',
      'htmlSnippet': '\u003cb\u003eLiverpool\u003c/b\u003e F.C. - Wikipedia',
      'mime': 'image/png',
      'fileFormat': 'image/png',
      'image': {
        'contextLink': 'https://en.wikipedia.org/wiki/Liverpool_F.C.',
        'height': 1554,
        'width': 1200,
        'byteSize': 375338,
        'thumbnailLink': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkmZF6khPw3yEYGBDLFviDqUyiQBoZbWI6HHNptyevSYBF4dei6-wyuI&s',
        'thumbnailHeight': 150,
        'thumbnailWidth': 116
      }
    },
    {
      'kind': 'customsearch#result',
      'title': 'LeBron\'s investment in Liverpool is paying off big time - Business ...',
      'htmlTitle': 'LeBron&#39;s investment in \u003cb\u003eLiverpool\u003c/b\u003e is paying off big time - Business ...',
      'link': 'https://i.insider.com/5aeb230419ee8630008b4989?width=1100&format=jpeg&auto=webp',
      'displayLink': 'www.businessinsider.com',
      'snippet': 'LeBron\'s investment in Liverpool is paying off big time - Business ...',
      'htmlSnippet': 'LeBron&#39;s investment in \u003cb\u003eLiverpool\u003c/b\u003e is paying off big time - Business ...',
      'mime': 'image/',
      'fileFormat': 'image/',
      'image': {
        'contextLink': 'https://www.businessinsider.com/lebrons-investment-in-liverpool-is-paying-off-big-time-2018-5',
        'height': 825,
        'width': 1100,
        'byteSize': 87652,
        'thumbnailLink': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwL5cQD8RKUkAO2bfW-zn6QaSDMRAt4iiWMj9qIoTDM6t4YyXTV3X_8sY&s',
        'thumbnailHeight': 112,
        'thumbnailWidth': 150
      }
    },
    {
      'kind': 'customsearch#result',
      'title': 'Liverpool F.C. - Wikipedia',
      'htmlTitle': '\u003cb\u003eLiverpool\u003c/b\u003e F.C. - Wikipedia',
      'link': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/180px-Liverpool_FC.svg.png',
      'displayLink': 'en.wikipedia.org',
      'snippet': 'Liverpool F.C. - Wikipedia',
      'htmlSnippet': '\u003cb\u003eLiverpool\u003c/b\u003e F.C. - Wikipedia',
      'mime': 'image/png',
      'fileFormat': 'image/png',
      'image': {
        'contextLink': 'https://en.wikipedia.org/wiki/Liverpool_F.C.',
        'height': 233,
        'width': 180,
        'byteSize': 45485,
        'thumbnailLink': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6jDwUdhV3M7Feby07ukZr6rcLI_2rQWK_EvDCBZxkjXYpqDMHwfMUlU&s',
        'thumbnailHeight': 109,
        'thumbnailWidth': 84
      }
    },
    {
      'kind': 'customsearch#result',
      'title': 'Team news: Confirmed Liverpool line-up v Wolves - Liverpool FC',
      'htmlTitle': 'Team news: Confirmed \u003cb\u003eLiverpool\u003c/b\u003e line-up v Wolves - \u003cb\u003eLiverpool\u003c/b\u003e FC',
      'link': 'https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/02/thumb_101555_default_news_size_5.jpeg',
      'displayLink': 'www.liverpoolfc.com',
      'snippet': 'Team news: Confirmed Liverpool line-up v Wolves - Liverpool FC',
      'htmlSnippet': 'Team news: Confirmed \u003cb\u003eLiverpool\u003c/b\u003e line-up v Wolves - \u003cb\u003eLiverpool\u003c/b\u003e FC',
      'mime': 'image/jpeg',
      'fileFormat': 'image/jpeg',
      'image': {
        'contextLink': 'https://www.liverpoolfc.com/news/first-team/383963-confirmed-team-news-liverpool-wolves',
        'height': 510,
        'width': 850,
        'byteSize': 145176,
        'thumbnailLink': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwyFZVn_aJgEyrAi2h22NDhnsUITnfOiJvJ4-mz69BnVkNusMTwlF0N1Y&s',
        'thumbnailHeight': 87,
        'thumbnailWidth': 145
      }
    },
    {
      'kind': 'customsearch#result',
      'title': 'Liverpool F.C. - Wikipedia',
      'htmlTitle': '\u003cb\u003eLiverpool\u003c/b\u003e F.C. - Wikipedia',
      'link': 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
      'displayLink': 'en.wikipedia.org',
      'snippet': 'Liverpool F.C. - Wikipedia',
      'htmlSnippet': '\u003cb\u003eLiverpool\u003c/b\u003e F.C. - Wikipedia',
      'mime': 'image/svg+xml',
      'fileFormat': 'image/svg+xml',
      'image': {
        'contextLink': 'https://en.wikipedia.org/wiki/Liverpool_F.C.',
        'height': 316,
        'width': 244,
        'byteSize': 132472,
        'thumbnailLink': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghmirH6u2bJlMIZ5uXcVZyddrdkoPVw3wdmJn60-ffHPdQKdlejIAcJM&s',
        'thumbnailHeight': 117,
        'thumbnailWidth': 90
      }
    },
    {
      'kind': 'customsearch#result',
      'title': 'Liverpool 2-0 Manchester United: Five talking points - Liverpool FC',
      'htmlTitle': '\u003cb\u003eLiverpool\u003c/b\u003e 2-0 Manchester United: Five talking points - \u003cb\u003eLiverpool\u003c/b\u003e FC',
      'link': 'https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/02/thumb_101306_default_news_size_5.jpeg',
      'displayLink': 'www.liverpoolfc.com',
      'snippet': 'Liverpool 2-0 Manchester United: Five talking points - Liverpool FC',
      'htmlSnippet': '\u003cb\u003eLiverpool\u003c/b\u003e 2-0 Manchester United: Five talking points - \u003cb\u003eLiverpool\u003c/b\u003e FC',
      'mime': 'image/jpeg',
      'fileFormat': 'image/jpeg',
      'image': {
        'contextLink': 'https://www.liverpoolfc.com/news/first-team/383341-liverpool-manchester-united-talking-points-premier-league',
        'height': 510,
        'width': 850,
        'byteSize': 129948,
        'thumbnailLink': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBLxran3wOatAX18gT1kyW63NwetnkdkNZbREaav_XHViKkis1TQ8G10&s',
        'thumbnailHeight': 87,
        'thumbnailWidth': 145
      }
    },
    {
      'kind': 'customsearch#result',
      'title': 'In Pictures: Liverpool reach Club World Cup final after late goal ...',
      'htmlTitle': 'In Pictures: \u003cb\u003eLiverpool\u003c/b\u003e reach Club World Cup final after late goal ...',
      'link': 'https://www.aljazeera.com/mritems/Images/2019/12/18/c1915eac218f42d08ea22995c3e977e1_8.jpg',
      'displayLink': 'www.aljazeera.com',
      'snippet': 'In Pictures: Liverpool reach Club World Cup final after late goal ...',
      'htmlSnippet': 'In Pictures: \u003cb\u003eLiverpool\u003c/b\u003e reach Club World Cup final after late goal ...',
      'mime': 'image/jpeg',
      'fileFormat': 'image/jpeg',
      'image': {
        'contextLink': 'https://www.aljazeera.com/indepth/inpictures/pictures-liverpool-reach-club-world-cup-final-late-goal-191218104341469.html',
        'height': 800,
        'width': 1200,
        'byteSize': 272966,
        'thumbnailLink': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2dAdTLDJXrtVgQGAEOmK6t20cUEA15qgR8HmItPwN9mfZFD7e4VkPlaf&s',
        'thumbnailHeight': 100,
        'thumbnailWidth': 150
      }
    },
    {
      'kind': 'customsearch#result',
      'title': 'Where are they now? The Liverpool team from Raheem Sterling\'s full ...',
      'htmlTitle': 'Where are they now? The \u003cb\u003eLiverpool\u003c/b\u003e team from Raheem Sterling&#39;s full ...',
      'link': 'https://d3nfwcxd527z59.cloudfront.net/content/uploads/2019/11/12153838/Sterling-Liverpool.jpg',
      'displayLink': 'www.planetfootball.com',
      'snippet': 'Where are they now? The Liverpool team from Raheem Sterling\'s full ...',
      'htmlSnippet': 'Where are they now? The \u003cb\u003eLiverpool\u003c/b\u003e team from Raheem Sterling&#39;s full ...',
      'mime': 'image/jpeg',
      'fileFormat': 'image/jpeg',
      'image': {
        'contextLink': 'https://www.planetfootball.com/quick-reads/where-are-they-now-the-liverpool-team-from-raheem-sterlings-full-debut/',
        'height': 367,
        'width': 700,
        'byteSize': 121723,
        'thumbnailLink': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQ39cqlwiirA4vUbybwS6cFAvLmz3Kiit5scggnLir39EfQqqcnfY42M&s',
        'thumbnailHeight': 73,
        'thumbnailWidth': 140
      }
    },
    {
      'kind': 'customsearch#result',
      'title': 'Manchester and Liverpool are an easy win for property buyers as ...',
      'htmlTitle': 'Manchester and \u003cb\u003eLiverpool\u003c/b\u003e are an easy win for property buyers as ...',
      'link': 'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/12/05/20062958-1741-11ea-9462-4dd25a5b0420_image_hires_193520.jpg?itok=bILHHWDW&v=1575545728',
      'displayLink': 'www.scmp.com',
      'snippet': 'Manchester and Liverpool are an easy win for property buyers as ...',
      'htmlSnippet': 'Manchester and \u003cb\u003eLiverpool\u003c/b\u003e are an easy win for property buyers as ...',
      'mime': 'image/jpeg',
      'fileFormat': 'image/jpeg',
      'image': {
        'contextLink': 'https://www.scmp.com/business/article/3040814/manchester-and-liverpool-are-easy-win-property-buyers-second-tier-uk',
        'height': 768,
        'width': 768,
        'byteSize': 292914,
        'thumbnailLink': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs9k1UpzwN20uJ-WcNjeOvXU4_5LaMEzR87vWG31lX7Asct8djTG9G5xdBvg&s',
        'thumbnailHeight': 142,
        'thumbnailWidth': 142
      }
    },
    {
      'kind': 'customsearch#result',
      'title': 'Liste der Spieler des FC Liverpool – Wikipedia',
      'htmlTitle': 'Liste der Spieler des FC \u003cb\u003eLiverpool\u003c/b\u003e – Wikipedia',
      'link': 'https://upload.wikimedia.org/wikipedia/de/thumb/0/0a/FC_Liverpool.svg/1200px-FC_Liverpool.svg.png',
      'displayLink': 'de.wikipedia.org',
      'snippet': 'Liste der Spieler des FC Liverpool – Wikipedia',
      'htmlSnippet': 'Liste der Spieler des FC \u003cb\u003eLiverpool\u003c/b\u003e – Wikipedia',
      'mime': 'image/png',
      'fileFormat': 'image/png',
      'image': {
        'contextLink': 'https://de.wikipedia.org/wiki/Liste_der_Spieler_des_FC_Liverpool',
        'height': 1624,
        'width': 1200,
        'byteSize': 399495,
        'thumbnailLink': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmbbuLN8-APHpfT2Iy8qMW4QJiTLGYvHQO9S-soDC6Vo1S9x9VZrRiRlQ&s',
        'thumbnailHeight': 150,
        'thumbnailWidth': 111
      }
    }
  ]
}

const apikey = 'AIzaSyCxbE-vJyowzzskm8nltMyWANfbcWZdRnM'

module.exports = {
  transformResponse
}