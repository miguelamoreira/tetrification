import fetchMock from "fetch-mock";import games from './mocks/games.js'
fetchMock.mock('http://localhost:4000/games',games)
export async function get(apiBaseUrl,endpoint){try{const response=await fetch(`${apiBaseUrl}/${endpoint}`)
return handleResponse(response)}catch(error){throw Error}}
export async function post(apiBaseUrl,endpoint,data){try{const response=await fetch(`${apiBaseUrl}/${endpoint}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)})
return handleResponse(response)}catch(error){throw error}}
async function handleResponse(response){if(!response.ok){const errorMessage=await response.text()
throw new Error(`API request failed with status ${response.status}: ${errorMessage}`)}
const data=await response.json()
return data}