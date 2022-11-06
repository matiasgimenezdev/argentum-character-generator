const canvas = document.getElementById('character');
const ctx = canvas.getContext('2d');
const characterName = document.getElementById('name');
const generator = document.getElementById('generator');

const drawPart = (graphic, x, y, width, height, w, h) => {
	ctx.drawImage(
		graphic,
		x,
		y,
		width,
		height,
		canvas.width / 2 - width / 2 + w,
		canvas.height / 2 - height / 2 + h,
		width,
		height
	);
};

const getCharacter = async () => {
	const result = await axios.get('http://localhost:3000/character');
	console.log(result.data);
	return result.data;
};

const loadImage = (base, index) => {
	const image = new Image();
	image.src = `./images/${base + index}.png`;
	return image;
};

generator.addEventListener('click', async () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.font = '10px Arial';
	ctx.fillStyle = 'grey';
	ctx.textAlign = 'center';
	ctx.fillText(characterName.value, 75, 130);

	const character = await getCharacter();

	const head = loadImage(10, character.head);
	const helmet = loadImage(30, character.shield);
	const body = loadImage(0, character.body);
	const weapon = loadImage(20, character.weapon);
	const shield = loadImage(40, character.shield);

	const drawHeadOption = {
		x: 0,
		y: 0,
		width: 18,
		height: 16,
	};

	const drawBodyOption = {
		x: 0,
		y: 0,
		width: 22,
		height: 40,
	};

	const drawHelmetOption = {
		x: 0,
		y: 0,
		width: 18,
		height: 16,
	};

	const drawShieldOption = {
		x: 0,
		y: 0,
		width: 8,
		height: 42,
	};

	const drawWeaponOption = {
		x: 0,
		y: 0,
		width: 8,
		height: 42,
	};

	drawPart(
		head,
		drawHeadOption.x,
		drawHeadOption.y,
		drawHeadOption.width,
		drawHeadOption.height,
		2,
		-12
	);

	drawPart(
		body,
		drawBodyOption.x,
		drawBodyOption.y,
		drawBodyOption.width,
		drawBodyOption.height,
		0,
		8
	);

	drawPart(
		helmet,
		drawHelmetOption.x,
		drawHelmetOption.y,
		drawHelmetOption.width,
		drawHelmetOption.height,
		2,
		-18
	);

	drawPart(
		weapon,
		drawWeaponOption.x,
		drawWeaponOption.y,
		drawWeaponOption.width,
		drawWeaponOption.height,
		-8,
		10
	);

	drawPart(
		shield,
		drawShieldOption.x,
		drawShieldOption.y,
		drawShieldOption.width,
		drawShieldOption.height,
		2,
		-12
	);
});
