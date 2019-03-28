const Request = require('request-promise');
const md5 = require('md5');
const api = require('../utils/marvel-api-key'); // Clés d'API


const timestamp = Date.now();
let preHash = timestamp + api.private_key + api.public_key;
let hash = md5(preHash);    // Hachage selon l'agorithme MD5 requis par l'API Marvel

const charUrl = api.base_url + '/v1/public/characters';
let urlParameter = '?ts=' + timestamp + '&apikey=' + api.public_key + '&hash=' + hash;

/**
 * Requests 20 characters, starting from the 100th, from the API.
 * 
 * @returns {Promise<Array>} characters - 
 */
function getAll() {
    let reqOptions = {
        uri: charUrl + urlParameter + '&offset=99&limit=20',
        json: true
    }
    return Request(reqOptions)
        .then((body) => {
            let characters = body.data.results;
            return characters;
        }, (error) => {
            console.log('[CS] Error (getAll):', error);
            return Promise.reject(error);
        });
}
exports.getAll = getAll;

/**
 * Requests a character from the API, giving it its id.
 * 
 * @param {string} characterId - Unique ID of the character resource.
 * @returns {Promise<Object>} character - 
 */
function getCharacter(characterId) {
    let reqOptions = {
        uri: charUrl + '/' + characterId + urlParameter,
        json: true
    }
    return Request(reqOptions)
        .then((body) => {
            let character = body.data.results[0];
            return character;
        }, (error) => {
            console.log('[CS] Error (getCharacter):', error);
            return Promise.reject(error);
        });
}
exports.getCharacter = getCharacter;