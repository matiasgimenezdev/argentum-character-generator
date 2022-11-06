const random = (max) => {
	return Math.floor(Math.random() * max);
};

class Character {
	getCharacter = () => {
		return {
			body: random(10),
			head: random(10),
			helmet: 0,
			weapon: random(3),
			shield: random(4),
		};
	};
}

module.exports = Character;
