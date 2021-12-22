/**
 * 
 * @param {*} url 
 * @param {*} qsParams 
 * @returns 
 */

export function getJSON(url, qsParams) {
  const buildQueryString = (params) => Object.entries(params).map((d) => `${d[0]}=${d[1]}`).join('&');

  const qs = qsParams ? `?${buildQueryString(qsParams)}` : '';
  return fetch(`${url}${qs}`)
  .then((response) => response.json())
  .then((data) => {
    return data;
  });
}