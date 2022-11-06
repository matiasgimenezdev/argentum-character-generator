module.exports = (app) => {
	const Character = require('./services/Character');
	const CharacterController = require('./controllers/CharacterController');

	const CharacterInstance = new Character();
	const CharacterControllerInstance = new CharacterController(
		CharacterInstance
	);

	app.get('/Character', CharacterControllerInstance.getCharacter);
};
