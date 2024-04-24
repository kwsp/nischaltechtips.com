<script lang="ts">
	// Adapted from https://codepen.io/klokt-valg/pen/xNwamQ
	import { onMount } from 'svelte';

	const FRAME_RATE_ADJUST = 30 / 1000;

	let canvas: HTMLCanvasElement, context: CanvasRenderingContext2D;
	export let width = 800;
	export let height = 600;
	export let winning_score = 6;

	// Const values adjusted from width and height
	let PADDLE_THICKNESS = Math.round(0.0125 * width);
	let PADDLE_HEIGHT = Math.round(height / 6);
	let BALL_RADIUS = Math.round((10 * width) / 800);

	let ballSpeedX = (10 * FRAME_RATE_ADJUST * width) / 800;
	let ballSpeedY = (4 * FRAME_RATE_ADJUST * height) / 600;
	let COMPUTER_MOVE_SPEED = (8 * FRAME_RATE_ADJUST * width) / 800;

	// variables updated in game
	let ballX = width / 2;
	let ballY = height / 2;
	let player1Score = 0;
	let player2Score = 0;
	let paddle1Y = Math.round(0.4 * height);
	let paddle2Y = Math.round(0.4 * height);
	let showingWinScreen = false;

	function handleMouseClick(evt: MouseEvent) {
		if (showingWinScreen) {
			player1Score = 0;
			player2Score = 0;
			showingWinScreen = false;
		}
	}

	function handleMouseMove(evt: MouseEvent) {
		paddle1Y = evt.offsetY - PADDLE_HEIGHT / 2;
	}

	function handleTouchstart(evt: TouchEvent) {
		if (showingWinScreen) {
			player1Score = 0;
			player2Score = 0;
			showingWinScreen = false;
		}
		evt.preventDefault(); // Prevents additional mouse events
		const touch = evt.touches[0];
		const rect = canvas.getBoundingClientRect();
		const offsetY = touch.clientY - rect.top;
		paddle1Y = offsetY - PADDLE_HEIGHT / 2;
	}

	function handleTouchmove(evt: TouchEvent) {
		evt.preventDefault(); // Prevents additional mouse events
		const touch = evt.touches[0];
		const rect = canvas.getBoundingClientRect();
		const offsetY = touch.clientY - rect.top;
		paddle1Y = offsetY - PADDLE_HEIGHT / 2;
	}

	function handleTouchend(evt: TouchEvent) {
		evt.preventDefault(); // Prevents additional mouse events
	}

	/**
	 * Restart the ball from the center of the screen
	 */
	function ballReset() {
		if (player1Score >= winning_score || player2Score >= winning_score) {
			showingWinScreen = true;
		}

		ballSpeedX = -ballSpeedX;
		ballX = canvas.width / 2;
		ballY = canvas.height / 2;
	}

	/**
	 * Move the computer player's paddle
	 */
	function computerMovement(elapsed: number) {
		const paddle2YCenter = paddle2Y + PADDLE_HEIGHT / 2;
		if (paddle2YCenter < ballY - 35) {
			paddle2Y = Math.min(paddle2Y + COMPUTER_MOVE_SPEED * elapsed, canvas.height);
		} else if (paddle2YCenter > ballY + 35) {
			paddle2Y = Math.max(paddle2Y - COMPUTER_MOVE_SPEED * elapsed, 0);
		}
	}

	function moveEverything(elapsed: number) {
		if (showingWinScreen) {
			return;
		}
		computerMovement(elapsed);

		ballX = ballX + ballSpeedX * elapsed;
		ballY = ballY + ballSpeedY * elapsed;

		const inRange = (val: number, min: number, max: number) => {
			return val > min && val < max;
		};

		if (ballX < PADDLE_THICKNESS && inRange(ballY, paddle1Y, paddle1Y + PADDLE_HEIGHT)) {
			// hit the left paddle
			ballSpeedX = -ballSpeedX;
			const deltaY = ballY - (paddle1Y + PADDLE_HEIGHT / 2);
			ballSpeedY = deltaY * 0.35 * FRAME_RATE_ADJUST;
			ballX = PADDLE_THICKNESS;
		} else if (ballX < 0) {
			// went off
			player2Score++; // must be BEFORE ballReset()
			ballReset();
		} else if (
			ballX > canvas.width - PADDLE_THICKNESS &&
			inRange(ballY, paddle2Y, paddle2Y + PADDLE_HEIGHT)
		) {
			// hit the right paddle
			ballSpeedX = -ballSpeedX;
			const deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
			ballSpeedY = deltaY * 0.35 * FRAME_RATE_ADJUST;
			ballX = canvas.width - PADDLE_THICKNESS;
		} else if (ballX > canvas.width) {
			// went off
			player1Score++; // must be BEFORE ballReset()
			ballReset();
		} else if (ballY <= 0) {
			// hit the top wall
			ballY = 0;
			ballSpeedY = -ballSpeedY;
		} else if (ballY >= canvas.height) {
			ballY = canvas.height - 1;
			// hit the bottom wall
			ballSpeedY = -ballSpeedY;
		}
	}

	function drawNet() {
		for (let i = 0; i < canvas.height; i += 40) {
			colorRect(canvas.width / 2 - 1, i, 2, 20, 'white');
		}
	}

	function textCenter(
		context: CanvasRenderingContext2D,
		text: string,
		halfWidth: number,
		y: number
	) {
		const measurement = context.measureText(text);
		context.fillText(text, halfWidth - measurement.width * 0.5, y);
	}

	function drawEverything() {
		// blanks out the screen with black
		colorRect(0, 0, canvas.width, canvas.height, 'black');

		const halfHeight = height / 2;
		const halfWidth = width / 2;

		if (showingWinScreen) {
			context.fillStyle = 'white';

			if (player1Score >= winning_score) {
				textCenter(context, 'You Won!!!', halfWidth, halfHeight);
			} else if (player2Score >= winning_score) {
				textCenter(context, 'You Lost!!!', halfWidth, halfHeight);
			}

			textCenter(context, 'Click to continue', halfWidth, height * 0.75);
			return;
		}

		drawNet();

		// this is left player paddle
		colorRect(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');

		// this is right computer paddle
		colorRect(canvas.width - PADDLE_THICKNESS, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');

		// next line draws the ball
		colorCircle(ballX, ballY, BALL_RADIUS, 'white');

		context.font = '24px Arial';
		context.fillText(player1Score, width * 0.25, halfHeight);
		context.fillText(player2Score, width * 0.75, halfHeight);
	}

	function colorCircle(centerX, centerY, radius, drawColor) {
		context.fillStyle = drawColor;
		context.beginPath();
		context.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
		context.fill();
	}

	function colorRect(leftX, topY, width, height, drawColor) {
		context.fillStyle = drawColor;
		context.fillRect(leftX, topY, width, height);
	}

	class RunningAverage {
		nMax: number;
		n: number;
		average: number;
		constructor(nMax: number = 50) {
			this.nMax = nMax;
			this.n = 0;
			this.average = 0;
		}
		add(x: number) {
			if (this.n < this.nMax) {
				++this.n;
			}
			this.average = (this.average * (this.n - 1) + x) / this.n;
			return this.average;
		}
		get() {
			return this.average;
		}
	}

	onMount(() => {
		context = canvas.getContext('2d')!;

		canvas.addEventListener('mousedown', handleMouseClick);
		canvas.addEventListener('mousemove', handleMouseMove);
		canvas.addEventListener('touchstart', handleTouchstart);
		canvas.addEventListener('touchmove', handleTouchmove);
		canvas.addEventListener('touchend', handleTouchend);

		// analytics
		const avgFPS = new RunningAverage(100);

		let previousTimestamp: number;
		let nFrames = 0;
		let averageFrameRate = 0;
		const step: FrameRequestCallback = (timestamp) => {
			if (previousTimestamp === undefined) {
				previousTimestamp = timestamp;
			} else {
				const elapsed = timestamp - previousTimestamp;
				previousTimestamp = timestamp;

				moveEverything(elapsed);
				drawEverything();

				// analytics
				if (elapsed > 0) {
					const frameRate = 1000 / elapsed;
					avgFPS.add(frameRate);
					if (++nFrames > 10) {
						// Update every 10 frames
						nFrames = 0;
						averageFrameRate = Math.round(avgFPS.add(frameRate));
					}
				}

				context.font = '18 Arial';
				context.fillText(averageFrameRate + ' fps', canvas.width - 100, 26);
				context.fillText('NTT Pong', 20, 26);
			}

			animationFrame = requestAnimationFrame(step);
		};

		let animationFrame = requestAnimationFrame(step);

		return () => {
			canvas.removeEventListener('mousedown', handleMouseClick);
			canvas.removeEventListener('mousemove', handleMouseMove);
			canvas.removeEventListener('touchstart', handleTouchstart);
			canvas.removeEventListener('touchmove', handleTouchmove);
			canvas.removeEventListener('touchend', handleTouchend);

			cancelAnimationFrame(animationFrame);
		};
	});
</script>

<div>
	<canvas bind:this={canvas} {width} {height}></canvas>
</div>
