const cs = require('../services/character-service');

/**
 * Displays a web page showing a list of 20 Marvel characters.
 * 
 * @param {object} request - HTML request
 * @param {object} response - HTML response
 * @param {function} next - 
 */
function getListPage( request, response, next) {
    console.log(typeof request);
    console.log(typeof response);
    console.log(typeof next);
    return cs.getAll()
    .then((characters) => {
        console.log('Displaying all characters…');
        response.render('characters/list.html.twig', {
            characters: characters
        });
    }, (error) => {
        console.log('[CC] Error (getListPage):', error.message);
        response.render('error.html.twig', { error });
    })
}
exports.getListPage = getListPage;

/**
 * Displays a web page showing details concerning a specific Marvel character.
 * 
 * @param {object} request - HTML request
 * @param {object} response - HTML response
 * @param {function} next - 
 */
function getCharacterPage(request, response, next) {
    let charId = request.params.charId;
    return cs.getCharacter(charId)
    .then((character) => {
        console.log(`Displaying ${character.name}…`);
        response.render('characters/character.html.twig', {
            character: character
        });
    }, (error) => {
        console.log('An error occured (character details):', error.message);
        response.render('error.html.twig', { error });
    });
}
exports.getCharacterPage = getCharacterPage;