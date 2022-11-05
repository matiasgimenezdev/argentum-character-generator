const canvas = document.getElementById('character');
const ctx = canvas.getContext('2d');
const canvas2 = document.getElementById('character2');
const ctx2 = canvas2.getContext('2d');

const loadImage = (path) => {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.onload = () => {
			resolve(image);
		};
		image.src = path;
	});
};

window.onload = async () => {
	const loadHead = loadImage('./images/head.png');
	const loadHelmet = loadImage('./images/helmet.png');
	const loadHelmet2 = loadImage('./images/helmet2.png');
	const loadBody = loadImage('./images/body.png');
	const loadWeapon = loadImage('./images/weapon.png');

	const drawPart = (ctx, canvas, graphic, x, y, width, height, w, h) => {
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

	const graphics = await Promise.all([
		loadHead,
		loadBody,
		loadHelmet,
		loadWeapon,
		loadHelmet2,
	]);

	console.log(graphics);

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

	const drawHelmet2Option = {
		x: 0,
		y: 0,
		width: 18,
		height: 6,
	};

	const drawWeaponOption = {
		x: 0,
		y: 0,
		width: 8,
		height: 42,
	};

	// Canvas 1

	drawPart(
		ctx,
		canvas,
		graphics[1],
		drawBodyOption.x,
		drawBodyOption.y,
		drawBodyOption.width,
		drawBodyOption.height,
		0,
		8
	);

	drawPart(
		ctx,
		canvas,
		graphics[0],
		drawHeadOption.x,
		drawHeadOption.y,
		drawHeadOption.width,
		drawHeadOption.height,
		2,
		-12
	);

	drawPart(
		ctx,
		canvas,
		graphics[4],
		drawHelmet2Option.x,
		drawHelmet2Option.y,
		drawHelmet2Option.width,
		drawHelmet2Option.height,
		2,
		-18
	);

	drawPart(
		ctx,
		canvas,
		graphics[3],
		drawWeaponOption.x,
		drawWeaponOption.y,
		drawWeaponOption.width,
		drawWeaponOption.height,
		-8,
		10
	);

	// Canvas 2

	drawPart(
		ctx2,
		canvas2,
		graphics[1],
		drawBodyOption.x,
		drawBodyOption.y,
		drawBodyOption.width,
		drawBodyOption.height,
		0,
		8
	);

	drawPart(
		ctx2,
		canvas2,
		graphics[0],
		drawHeadOption.x,
		drawHeadOption.y,
		drawHeadOption.width,
		drawHeadOption.height,
		2,
		-12
	);

	drawPart(
		ctx2,
		canvas2,
		graphics[2],
		drawHelmetOption.x,
		drawHelmetOption.y,
		drawHelmetOption.width,
		drawHelmetOption.height,
		2,
		-22
	);

	drawPart(
		ctx2,
		canvas2,
		graphics[3],
		drawWeaponOption.x,
		drawWeaponOption.y,
		drawWeaponOption.width,
		drawWeaponOption.height,
		-8,
		10
	);
};

ctx.font = '10px Arial';
ctx.fillStyle = '#00FFB9';
ctx.textAlign = 'center';
ctx.fillText('LyznheV', 53, 87);
ctx.fillText('<Union Pacific>', 53, 96);

ctx2.font = '10px Arial';
ctx2.fillStyle = 'skyblue';
ctx2.textAlign = 'center';
ctx2.fillText('LyznheV', 53, 87);
ctx2.fillText('<Union Pacific>', 53, 96);
