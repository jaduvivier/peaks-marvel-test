const timestamp = Date.now();
const apikey = '';
const apisecret = '';
const apiurl = 'https://gateway.marvel.com/v1/public/characters';

function hashToMd5(textToBeHashed) {
    // TODO (https://stackoverflow.com/questions/14733374/how-to-generate-md5-file-hash-on-javascript)
}

let preHash = timestamp + apisecret + apikey;
let hash = hashToMd5(preHash);

function getAll() {
    // TODO: get request at /v1/public/characters then filter (22 starting from 99 (100th))
}
exports.getAll = getAll;

function getCharacter(characterId) {
    // TODO: get request at GET /v1/public/characters/{characterId}
}
exports.getCharacter = getCharacter;