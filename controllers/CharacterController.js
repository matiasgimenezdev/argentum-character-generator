class CharacterController {
	constructor(Character) {
		this.CharacterService = Character;
	}

	getCharacter = (request, response) => {
		console.log(this.CharacterService.getCharacter());
		response.end(JSON.stringify(this.CharacterService.getCharacter()));
	};
}

module.exports = CharacterController;
