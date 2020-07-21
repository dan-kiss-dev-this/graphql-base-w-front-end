const GRAPHQL_URL = 'http://localhost:9000/';

async function fetchGreeting() {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        query {
          greeting
        }
      `
    })
  })
  const responseBody = await response.json()
  const { data } = responseBody;
  console.log(responseBody)
  return data
}

// we destructure the greeting from the data object we get back
// we make graphql request over http, client uses http under the hood
fetchGreeting().then(({ greeting }) => {
  const title = document.querySelector('h1');
  title.textContent = greeting
})
