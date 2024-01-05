import fetchMock from "fetch-mock";
import games from './mocks/games.js'

fetchMock.mock('http://localhost:4000/games', games)

/**
 * GET utility function
 * @param {string} apiBaseUrl - this is the base URL from the API
 * @param {string} endpoint - this is the endpoint of the API
 * @returns a promise object with the response
 */

export async function get(apiBaseUrl, endpoint){
    try {
        const response = await fetch(`${apiBaseUrl}/${endpoint}`)
        return handleResponse(response)
    } catch (error) {
        throw Error
    }
}

/**
 * POST utility function
 * @param {*} apiBaseUrl - this is the base URL from the API
 * @param {*} endpoint - this is the endpoint of the API
 * @param {*} data - this is the data that we will send to the server
 */

export async function post(apiBaseUrl, endpoint, data){
    try {
        const response = await fetch(`${apiBaseUrl}/${endpoint}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        })
        return handleResponse(response)
    } catch (error) {
        throw error
    }
}

/**
 * Response handling 
 * @param {object} response a promise object with the response of the server
 * @returns the response from the server 
 */

async function handleResponse(response){
    if(!response.ok){
        const errorMessage = await response.text()
        throw new Error(`API request failed with status ${response.status}: ${errorMessage}`)
    }
    const data = await response.json()
    return data
}