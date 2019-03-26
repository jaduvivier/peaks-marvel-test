const cs = require('../services/character-service');
const options = {
    now: Date.now() / 1000
}

function getListPage( request, response, next) {
    return cs.getAll()
        .then((characters) => {
            response.render('characters/list.html.twig', Object.apply(options, {
                characters
            }));
        }, (error) => {
            console.log('An error occured (characters list):', error.message);
            // TODO: redirect or render smtg
        })
}
exports.getListPage = getListPage;

function getCharacterPage(request, response, next) {
    let charId = request.params.charId;
    return cs.getCharacter(charId)
        .then((character) => {
            response.render('characters/character.html.twig', Object.apply(options, {
                character
            }));
        }, (error) => {
            console.log('An error occured (character details):', error.message);
            // TODO: redirect or render smtg
        })
}
exports.getCharacterPage = getCharacterPage;