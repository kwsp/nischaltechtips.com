<script lang="ts">
	// Adapted from https://codepen.io/klokt-valg/pen/xNwamQ
	import { onMount } from 'svelte';

	const FRAMES_PER_SECOND = 60;
	const FRAME_RATE_ADJUST = 30 / FRAMES_PER_SECOND;

	const PADDLE_THICKNESS = 10;
	const PADDLE_HEIGHT = 100;
	const COMPUTER_MOVE_SPEED = 8 * FRAME_RATE_ADJUST;

	let canvas: HTMLCanvasElement, context: CanvasRenderingContext2D;
	export let width = 800;
	export let height = 600;
	export let winning_score = 6;

	let ballX = 100;
	let ballY = 100;
	let ballSpeedX = 10 * FRAME_RATE_ADJUST;
	let ballSpeedY = 4 * FRAME_RATE_ADJUST;
	let player1Score = 0;
	let player2Score = 0;
	let paddle1Y = 250;
	let paddle2Y = 250;
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

	function drawEverything() {
		// blanks out the screen with black
		colorRect(0, 0, canvas.width, canvas.height, 'black');

		if (showingWinScreen) {
			context.fillStyle = 'white';

			if (player1Score >= winning_score) {
				context.fillText('Left Player Won', width / 2 - 25, height / 2);
			} else if (player2Score >= winning_score) {
				context.fillText('Right Player Won', width / 2 - 25, height / 2);
			}

			context.fillText('click to continue', 350, 500);
			return;
		}

		drawNet();

		// this is left player paddle
		colorRect(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');

		// this is right computer paddle
		colorRect(canvas.width - PADDLE_THICKNESS, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');

		// next line draws the ball
		colorCircle(ballX, ballY, 10, 'white');

		context.font = '20px Arial';
		context.fillText(player1Score, 100, 100);
		context.fillText(player2Score, canvas.width - 100, 100);

		context.fillText('NTT Pong', 20, 20);
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
			context.font = '10px Arial';
			context.fillText(avgFrameRate + 'fps', canvas.width - 50, 10);
		}, 1000 / FRAMES_PER_SECOND);

		return () => {
			clearInterval(clear);
		};
	});
</script>

<div style="text-align:center;">
	<canvas bind:this={canvas} id="gameCanvas" {width} {height}></canvas>
</div>
