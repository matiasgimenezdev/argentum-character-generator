const random = () => {
	return Math.floor(Math.random() * 10);
};

class Character {
	getCharacter = () => {
		return {
			body: random(),
			head: random(),
			helmet: random(),
			weapon: random(),
			shield: random(),
		};
	};
}

module.exports = Character;
