export const spinnerLoader = () => {
  return `<div class="spinner-loader"></div>`;
}

const resultList = (items) => {
  return `
    <ul class="link-list min-list">
      ${items.map((item) => resultItem(item)).join('')}
    </ul>`
}

const resultItem = (item) => {
  return `
    <li>
      <a href="${item.link}">
        ${item.title.rendered}
      </a>
      ${item.type === 'post'? `by ${item.author_name}`: ''}
    </li>
  `
}

const noResult = () => {
  return `
    <p>No general information matches that search</p>
  `
}

export const searchResults = (json) => {
  return `
    <h2 class="search-overlay__section-title">General Information</h2>
      ${json.length ? resultList(json) : noResult()}
    `;  
}

export const error = () => `<p>Unexpected error, please try again</p>`;
