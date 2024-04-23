<script lang="ts">
	// Adapted from https://codepen.io/klokt-valg/pen/xNwamQ
	import { onMount } from 'svelte';

	const FRAMES_PER_SECOND = 60;
	const FRAME_RATE_ADJUST = 30 / FRAMES_PER_SECOND;

	let canvas: HTMLCanvasElement, context: CanvasRenderingContext2D;
	export let width = 800;
	export let height = 600;
	export let winning_score = 6;

	// Const values adjusted from width and height
	let PADDLE_THICKNESS = Math.round(0.0125 * width);
	let PADDLE_HEIGHT = Math.round(height / 6);
	let ballSpeedX = Math.round((10 * FRAME_RATE_ADJUST * width) / 800);
	let ballSpeedY = Math.round((4 * FRAME_RATE_ADJUST * height) / 600);
	let ballRadius = Math.round((10 * width) / 800);
	let COMPUTER_MOVE_SPEED = Math.round((8 * FRAME_RATE_ADJUST * width) / 800);

	// variables updated in game
	let ballX = 100;
	let ballY = 100;
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
	}

	function handleTouchmove(evt: TouchEvent) {
		evt.preventDefault(); // Prevents additional mouse events
		const touch = evt.touches[0];
		const rect = canvas.getBoundingClientRect();
		const offsetY = touch.clientY - rect.top;
		// const offsetX = touch.clientX - rect.left;
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
	function computerMovement() {
		const paddle2YCenter = paddle2Y + PADDLE_HEIGHT / 2;
		if (paddle2YCenter < ballY - 35) {
			paddle2Y = paddle2Y + COMPUTER_MOVE_SPEED;
		} else if (paddle2YCenter > ballY + 35) {
			paddle2Y = paddle2Y - COMPUTER_MOVE_SPEED;
		}
	}

	function moveEverything() {
		if (showingWinScreen) {
			return;
		}
		computerMovement();

		ballX = ballX + ballSpeedX;
		ballY = ballY + ballSpeedY;

		if (ballX < PADDLE_THICKNESS && ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
			// hit the left paddle
			ballSpeedX = -ballSpeedX;

			const deltaY = ballY - (paddle1Y + PADDLE_HEIGHT / 2);
			ballSpeedY = deltaY * 0.35 * FRAME_RATE_ADJUST;
		} else if (ballX < 0) {
			// went off
			player2Score++; // must be BEFORE ballReset()
			ballReset();
		}

		if (
			ballX > canvas.width - PADDLE_THICKNESS &&
			ballY > paddle2Y &&
			ballY < paddle2Y + PADDLE_HEIGHT
		) {
			// hit the right paddle
			ballSpeedX = -ballSpeedX;

			const deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
			ballSpeedY = deltaY * 0.35 * FRAME_RATE_ADJUST;
		} else if (ballX > canvas.width) {
			// went off
			player1Score++; // must be BEFORE ballReset()
			ballReset();
		}

		if (ballY < 0) {
			// hit the top wall
			ballSpeedY = -ballSpeedY;
		}
		if (ballY > canvas.height) {
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
		colorCircle(ballX, ballY, ballRadius, 'white');

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

	onMount(() => {
		context = canvas.getContext('2d');

		canvas.addEventListener('mousedown', handleMouseClick);
		canvas.addEventListener('mousemove', handleMouseMove);
		canvas.addEventListener('touchstart', handleTouchstart);
		canvas.addEventListener('touchmove', handleTouchmove);
		canvas.addEventListener('touchend', handleTouchend);

		// analytics
		let startTime = new Date().getTime();
		let totalFramesRendered = 0;
		let avgFrameRate = 0;

		const clear = setInterval(function () {
			moveEverything();
			drawEverything();
			// analytics
			totalFramesRendered++;
			avgFrameRate =
				Math.round((totalFramesRendered / ((new Date().getTime() - startTime) / 1000)) * 10) / 10.0;
			context.font = '18 Arial';
			context.fillText(avgFrameRate + 'fps', canvas.width - 100, 26);
			context.fillText('NTT Pong', 20, 26);
		}, 1000 / FRAMES_PER_SECOND);

		return () => {
			canvas.removeEventListener('mousedown', handleMouseClick);
			canvas.removeEventListener('mousemove', handleMouseMove);
			canvas.removeEventListener('touchstart', handleTouchstart);
			canvas.removeEventListener('touchmove', handleTouchmove);
			canvas.removeEventListener('touchend', handleTouchend);

			clearInterval(clear);
		};
	});
</script>

<div style="text-align:center;">
	<canvas bind:this={canvas} id="gameCanvas" {width} {height}></canvas>
</div>
