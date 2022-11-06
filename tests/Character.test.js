const Character = require('../services/Character');
const CharacterInstance = new Character();

test('randoms between 1 y 10', () => {
	expect(CharacterInstance.getCharacter().body).toBeGreaterThan(0);
	expect(CharacterInstance.getCharacter().body).toBeLessThanOrEqual(10);
	expect(CharacterInstance.getCharacter().head).toBeGreaterThan(0);
	expect(CharacterInstance.getCharacter().head).toBeLessThanOrEqual(10);
	expect(CharacterInstance.getCharacter().weapon).toBeGreaterThan(0);
	expect(CharacterInstance.getCharacter().weapon).toBeLessThanOrEqual(10);
	expect(CharacterInstance.getCharacter().shield).toBeGreaterThan(0);
	expect(CharacterInstance.getCharacter().shield).toBeLessThanOrEqual(10);
	expect(CharacterInstance.getCharacter().helmet).toBeGreaterThan(0);
	expect(CharacterInstance.getCharacter().helmet).toBeLessThanOrEqual(10);
});
