const Character = require('../services/Character');
const CharacterInstance = new Character();

test('randoms between 1 y 10', () => {
	expect(CharacterInstance.getCharacter().body).toBeGreaterThanOrEqual(0);
	expect(CharacterInstance.getCharacter().body).toBeLessThan(10);
	expect(CharacterInstance.getCharacter().head).toBeGreaterThanOrEqual(0);
	expect(CharacterInstance.getCharacter().head).toBeLessThan(10);
	expect(CharacterInstance.getCharacter().weapon).toBeGreaterThanOrEqual(0);
	expect(CharacterInstance.getCharacter().weapon).toBeLessThan(3);
	expect(CharacterInstance.getCharacter().shield).toBeGreaterThanOrEqual(0);
	expect(CharacterInstance.getCharacter().shield).toBeLessThan(4);
});
