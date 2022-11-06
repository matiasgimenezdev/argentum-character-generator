const canvas = document.getElementById('character');
const ctx = canvas.getContext('2d');
const characterName = document.getElementById('name');
const clanName = document.getElementById('clan');
const generator = document.getElementById('generator');

const drawPart = (graphic, x, y, width, height, sX, sY) => {
	ctx.drawImage(
		graphic,
		x,
		y,
		width,
		height,
		canvas.width / 2 - width / 2 + sX,
		canvas.height / 2 - height / 2 + sY,
		width,
		height
	);
};

const getCharacter = async () => {
	const result = await axios.get('http://localhost:3000/character');
	console.log(result.data);
	return result.data;
};

const loadImage = async (base, index) => {
	return new Promise((resolve, reject) => {
		const downloadingImage = new Image();
		downloadingImage.onload = () => {
			resolve(downloadingImage);
		};
		downloadingImage.src = `./images/${base + index}.png`;
	});
};

generator.addEventListener('click', async () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.font = '10px Arial';
	ctx.fillStyle = '#5CFF5C';
	ctx.textAlign = 'center';
	ctx.fillText(characterName.value, 50, 85);
	if (clanName.value) {
		ctx.fillText(`<${clanName.value}>`, 50, 94);
	}

	const character = await getCharacter();

	const head = loadImage(10, character.head);
	const helmet = loadImage(30, character.helmet);
	const body = loadImage(0, character.body);
	const weapon = loadImage(20, character.weapon);
	const shield = loadImage(40, character.shield);

	const graphics = await Promise.all([head, helmet, body, weapon, shield]);

	const drawHeadOption = {
		x: 0,
		y: 0,
		width: 18,
		height: 25,
	};

	const drawBodyOption = {
		x: 0,
		y: 6,
		width: 25,
		height: 40,
	};

	const drawHelmetOption = {
		x: 0,
		y: -3,
		width: 18,
		height: 10,
	};

	const drawShieldOption = {
		x: 20,
		y: 20,
		width: 20,
		height: 40,
	};

	const drawWeaponOption = {
		x: -5,
		y: 20,
		width: 14,
		height: 38,
	};

	drawPart(
		graphics[0],
		drawHeadOption.x,
		drawHeadOption.y,
		drawHeadOption.width,
		drawHeadOption.height,
		1,
		-15
	);

	drawPart(
		graphics[1],
		drawHelmetOption.x,
		drawHelmetOption.y,
		drawHelmetOption.width,
		drawHelmetOption.height,
		1,
		-28
	);

	drawPart(
		graphics[2],
		drawBodyOption.x,
		drawBodyOption.y,
		drawBodyOption.width,
		drawBodyOption.height,
		0,
		8
	);

	drawPart(
		graphics[3],
		drawWeaponOption.x,
		drawWeaponOption.y,
		drawWeaponOption.width,
		drawWeaponOption.height,
		-12,
		22
	);

	drawPart(
		graphics[4],
		drawShieldOption.x,
		drawShieldOption.y,
		drawShieldOption.width,
		drawShieldOption.height,
		12,
		4
	);
});
