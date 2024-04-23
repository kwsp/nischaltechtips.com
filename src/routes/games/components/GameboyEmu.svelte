<script lang="ts">
	// Adapted from https://codepen.io/zerratar/pen/zaPZWg
	import { onMount } from 'svelte';
	import GameBoy from '../extern/GameBoy.js';

	// Pokemon Blue
	// const romURL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/163870/PokemonBlue.gb';
	// Link's Awakening
	// const romURL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/163870/LinksAwakening.gb';
	export let romURL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/163870/LinksAwakening.gb';

	let display: HTMLCanvasElement;
	let context: CanvasRenderingContext2D;
	let gb: typeof GameBoy;
	let title = '';

	function downloadROM() {
		var http = new XMLHttpRequest();
		http.open('GET', romURL);
		http.responseType = 'arraybuffer';
		http.onreadystatechange = function () {
			if (http.readyState == 4 && http.status == 200) {
				loadROM(http.response);
			}
		};
		http.send();
	}

	function loadROM(arraybuffer: ArrayBuffer) {
		// if (window.gb != undefined) {
		// 	clearInterval(gb.interval);
		// 	context.setTransform(1, 0, 0, 1, 0, 0);
		// }

		context.scale(1.87, 1.05);
		gb = new GameBoy(arraybuffer);
		gb.displaycanvas = context;

		title = '';
		for (var i = 0; gb.getAddress(308 + i) != 0; i++) {
			title += String.fromCharCode(gb.getAddress(308 + i));
		}

		gb.init();
	}

	function pause() {
		gb.pause();
		if (gb.paused) {
			display.style.opacity = 0.5;
		} else {
			display.style.opacity = 1;
		}
	}

	function buttonDown(key) {
		gb.keyPressed(key);
	}
	function buttonUp(key) {
		gb.keyReleased(key);
	}

	onMount(() => {
		context = display.getContext('2d');
		if (romURL === undefined || romURL.length == 0) {
			console.log('No romURL.');
			return;
		}
		downloadROM();
	});

	const GBKeybindTable = new Map(
		Object.entries({
			right: 1,
			left: 2,
			up: 4,
			down: 8,
			a: 16,
			b: 32,
			select: 64,
			start: 128
		})
	);

	const UserKeybind = new Map(
		Object.entries({
			w: 'up',
			s: 'down',
			a: 'left',
			d: 'right',
			i: 'a',
			l: 'b',
			j: 'select',
			k: 'start',
			ArrowLeft: 'left',
			ArrowUp: 'up',
			ArrowDown: 'down',
			ArrowRight: 'right'
		})
	);

	function handleKeydown(evt: KeyboardEvent) {
		const gbKey = UserKeybind.get(evt.key);
		const gbKeyCode = gbKey === undefined ? undefined : GBKeybindTable.get(gbKey);
		// console.log(`Received keydown: ${evt.key}, gbKey=${gbKey}, gbKeyCode=${gbKeyCode}`);
		gbKeyCode !== undefined && gb.keyPressed(gbKeyCode);
	}
	function handleKeyup(evt: KeyboardEvent) {
		const gbKey = UserKeybind.get(evt.key);
		const gbKeyCode = gbKey === undefined ? undefined : GBKeybindTable.get(gbKey);
		// console.log(`Received keyup: ${evt.key}, gbKey=${gbKey}, gbKeyCode=${gbKeyCode}`);
		gbKeyCode !== undefined && gb.keyReleased(gbKeyCode);
	}
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />

<div class="gameboy">
	<div class="top">
		<div class="onoff">
			<span class="arrow-left"></span><span class="onoff-label">on/off</span><span
				class="arrow-right"
			></span>
		</div>
	</div>
	<div class="components">
		<div class="screen">
			<div class="battery"></div>
			<canvas bind:this={display} class="display" id="display"></canvas>
		</div>
		<div class="controls">
			<div class="logo">
				<div class="logo-nintendo"></div>
				<div class="logo-gameboy"></div>
			</div>
			<div class="inputs">
				<div class="dpad">
					<div
						class="left"
						on:mousedown={(e) => buttonDown(2)}
						on:mouseup={(e) => buttonUp(2)}
						role="button"
						tabindex="0"
					></div>
					<div
						class="up"
						on:mousedown={(e) => buttonDown(4)}
						on:mouseup={(e) => buttonUp(4)}
						role="button"
						tabindex="0"
					></div>
					<div
						class="right"
						on:mousedown={(e) => buttonDown(1)}
						on:mouseup={(e) => buttonUp(1)}
						role="button"
						tabindex="0"
					></div>
					<div
						class="down"
						on:mousedown={(e) => buttonDown(8)}
						on:mouseup={(e) => buttonUp(8)}
						role="button"
						tabindex="0"
					></div>
				</div>
				<div class="buttons">
					<div
						class="button-b"
						on:mousedown={(e) => buttonDown(32)}
						on:mouseup={(e) => buttonUp(32)}
						role="button"
						tabindex="0"
					></div>
					<div
						class="button-a"
						on:mousedown={(e) => buttonDown(16)}
						on:mouseup={(e) => buttonUp(16)}
						role="button"
						tabindex="0"
					></div>
				</div>
				<div class="selections">
					<div
						class="select"
						on:mousedown={(e) => buttonDown(64)}
						on:mouseup={(e) => buttonUp(64)}
						role="button"
						tabindex="0"
					></div>
					<div
						class="start"
						on:mousedown={(e) => buttonDown(128)}
						on:mouseup={(e) => buttonUp(128)}
						role="button"
						tabindex="0"
					></div>
				</div>
			</div>
			<div class="speakers">
				<div class="grill"></div>
				<div class="grill"></div>
				<div class="grill"></div>
				<div class="grill"></div>
				<div class="grill"></div>
				<div class="grill"></div>
			</div>
		</div>
	</div>
</div>

<div style="display: flex; justify-content: center;">
	<div class="info-below" style="justify-content: center;">
		<div id="title"><strong>Title</strong>: {title}</div>

		<div>
			<strong>User Keybinds</strong>
			<ul style="margin-top: 0;">
				{#each UserKeybind as [key, val]}
					<li>
						<span>{key}: {val}</span>
					</li>
				{/each}
			</ul>
		</div>

		<div id="data"></div>
		<div id="cartridge"></div>
		<div id="cartridge-data"></div>
	</div>
</div>

<style>
	.gameboy {
		margin-left: auto;
		margin-right: auto;
		/* margin-top: 25px; */
		width: 367px;
		height: 630px;
		background-color: #d2ddcd;
		border-radius: 0 20px 40px 0;
		box-shadow: inset -2px -1px 5px 2px rgba(0, 0, 0, 0.25);
	}

	.info-below {
		width: 367px;
	}

	/* .gameboy:after {
		content: ' ';
		top: 25px;
		position: absolute;
		display: block;
		width: 363px;
		height: 625px;
		border-radius: 0 20px 40px 0;
		box-shadow: inset 0px 0px 2px 2px rgba(255, 255, 255, 0.25);
		user-select: none;
		pointer-events: none;
	} */

	.top {
		height: 28px;
		border-bottom: 3px solid #bccab3;
	}

	.onoff {
		width: 56px;
		height: 15px;
		position: absolute;
		display: flex;
		background-color: #b8c4ae;
		margin-left: 40px;
		margin-top: -28px;
		border-radius: 24px;
		color: #d2ddcd;
		padding-left: 12px;
		padding-top: 3px;
		box-shadow: inset -1px 1px 10px 1px rgba(0, 0, 0, 0.1);
	}

	.onoff .arrow-left:before {
		content: ' ';
		position: absolute;
		border-right: 0;
		margin-left: -7px;
		margin-top: 1px;
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
		border-right: 5px solid #d2ddcd;
	}

	.onoff .arrow-right:before {
		content: ' ';
		position: absolute;
		border-right: 0;
		margin-left: 2px;
		margin-top: 1px;
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
		border-left: 5px solid #d2ddcd;
	}

	.onoff-label {
		font-size: 8pt;
		font-weight: bold;
		text-transform: uppercase;
	}

	.components {
		border-top: 1px solid rgba(255, 255, 255, 0.25);
	}

	.top:before {
		content: ' ';
		height: 30px;
		position: relative;
		left: 30px;
		display: inline-block;
		top: 0px;
		border-left: 1px solid rgba(255, 255, 255, 0.25);
		border-right: 3px solid #bccab3;
	}

	.top:after {
		content: ' ';
		height: 28px;
		position: relative;
		display: inline-block;
		left: 324px;
		border-left: 1px solid rgba(255, 255, 255, 0.25);
		border-right: 3px solid #bccab3;
	}

	.screen {
		background-color: #585769;
		width: 317px;
		height: 247px;
		margin-left: auto;
		margin-right: 28px;
		margin-top: 15px;
		border-radius: 10px 10px 50px 10px;
		border: 1px solid rgba(0, 0, 0, 0.25);
		display: flex;
		flex-direction: row;
		box-shadow: inset -1px 1px 10px 1px rgba(0, 0, 0, 0.2);
	}

	.screen:before,
	.screen:after {
		content: ' ';
		border-top: 3px solid #442f3e;
		border-bottom: 3px solid #41374f;
		position: absolute;
		height: 2px;
		margin-top: 13px;
	}

	.screen:before {
		margin-left: 15px;
		width: 83px;
	}

	.screen:after {
		margin-left: 265px;
		width: 35px;
	}

	.battery {
		width: 12px;
		height: 12px;
		background-color: #6f0202;
		border-radius: 12px;
		margin-top: 91px;
		margin-left: 15px;
		margin-right: 27px;
		box-shadow: inset 1px 1px 0px 1px rgba(0, 0, 0, 0.25);
	}

	.battery:after {
		content: 'BATTERY';
		color: white;
		width: 0;
		height: 0;
		font-size: 6pt;
		position: relative;
		display: block;
		margin-left: -6px;
		margin-top: 17px;
	}

	.display {
		width: 210px;
		height: 195px;
		background-color: black;
		margin-top: 27px;
		border-left: 1px solid rgba(255, 255, 255, 0.4);
		border-top: 1px solid rgba(255, 255, 255, 0.4);
	}

	.display:before {
		content: 'DOT MATRIX WITH STEREO SOUND';
		position: absolute;
		color: white;
		font-size: 6.5pt;
		margin-top: -16px;
		margin-left: 50px;
	}

	.controls {
		display: flex;
		flex-direction: column;
	}

	.logo {
		color: #464763;
		display: flex;
		line-height: 22pt;
		margin-top: 5px;
		margin-left: 20px;
	}

	.logo-nintendo:before {
		/* content: 'Nintendo'; */
		content: 'NTT';
		font-weight: bold;
		margin-top: 2px;
		margin-right: 5px;
		position: relative;
		display: inline-block;
	}

	.logo-gameboy:before {
		content: 'GAME BOY';
		font-style: italic;
		font-weight: bold;
		font-size: 17pt;
	}

	.inputs {
		display: flex;
		justify-content: space-between;
		margin-top: 34px;
		flex-wrap: wrap;
	}

	.dpad {
		width: 128px;
		height: 128px;
		background-color: #b8c4ae;
		border-radius: 100px;
		margin-left: 10px;
		box-shadow: inset -2px -1px 5px 2px rgba(0, 0, 0, 0.025);
	}

	.dpad:before {
		content: ' ';
		display: block;
		position: absolute;
		width: 36px;
		height: 36px;
		background-color: #353531;
		margin-top: 46px;
		margin-left: 46px;
	}

	.dpad:after {
		content: ' ';
		display: block;
		position: absolute;
		width: 24px;
		height: 24px;
		border-radius: 24px;
		background-color: black;
		margin-top: 54px;
		margin-left: 51px;
	}

	.dpad .left,
	.dpad .right,
	.dpad .up,
	.dpad .down {
		background-color: #353531;
		position: absolute;
	}

	.dpad .left,
	.dpad .right {
		width: 33px;
		height: 36px;
	}

	.dpad .up,
	.dpad .down {
		width: 36px;
		height: 33px;
	}

	.dpad .left:active,
	.dpad .right:active,
	.dpad .up:active,
	.dpad .down:active {
		background-color: black;
	}

	.dpad .up {
		margin-top: 13px;
		margin-left: 46px;
		border-radius: 5px 5px 0 0;
	}

	.dpad .down {
		margin-left: 46px;
		margin-top: 81px;
		border-radius: 0 0 5px 5px;
		border-bottom: 3px solid black;
	}

	.dpad .right {
		border-radius: 0 5px 5px 0;
		margin-top: 48px;
		margin-left: 81px;
		border-bottom: 3px solid black;
	}

	.dpad .left {
		border-radius: 5px 0 0 5px;
		margin-top: 48px;
		margin-left: 13px;
		border-bottom: 3px solid black;
	}

	.dpad .down:before,
	.dpad .left:before,
	.dpad .up:before,
	.dpad .right:before {
		content: ' ';
		width: 0;
		height: 0;
		position: relative;
	}

	.dpad .up:before {
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-bottom: 5px solid #d2ddcd;
		margin-left: 12px;
		top: -28px;
	}

	.dpad .right:before {
		position: absolute;
		border-right: 0;
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
		border-left: 5px solid #d2ddcd;
		top: 12px;
		right: -10px;
	}

	.dpad .left:before {
		position: absolute;
		border-right: 0;
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
		border-right: 5px solid #d2ddcd;
		top: 12px;
		right: 38px;
	}

	.dpad .down:before {
		position: absolute;
		border-right: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-top: 5px solid #d2ddcd;
		top: 40px;
		right: 12px;
	}

	.dpad .right:after,
	.dpad .up:after,
	.dpad .left:after,
	.dpad .down:after {
		content: '| |';
		color: rgba(0, 0, 0, 0.5);
		display: block;
		font-size: 15pt;
	}

	.dpad .right:after {
		margin-left: 7px;
		margin-top: 5px;
	}

	.dpad .left:after {
		margin-left: 10px;
		margin-top: 5px;
	}

	.dpad .down:after {
		transform: rotate(90deg);
		margin-left: 5px;
		margin-top: 15px;
	}

	.dpad .up:after {
		transform: rotate(90deg);
		margin-left: 5px;
		margin-top: -5px;
	}

	.buttons {
		width: 115px;
		height: 65px;
		background-color: #b8c4ae;
		border-radius: 60px;
		margin-left: 80px;
		margin-right: 5px;
		transform: rotate(-30deg);
		margin-top: 29px;
		display: flex;
		justify-content: space-around;
		box-shadow: inset -2px -1px 5px 2px rgba(0, 0, 0, 0.05);
	}

	.button-a,
	.button-b {
		width: 46px;
		height: 46px;
		border-radius: 40px;
		margin-top: 9px;
		border: 3px solid rgba(42, 0, 3, 0.25);
		box-sizing: border-box;
		background-color: #63002c;
		box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.25);
	}

	.button-a:before,
	.button-b:before {
		content: ' ';
		width: 42px;
		height: 42px;
		border-top: 1px solid rgba(255, 255, 255, 0.45);
		border-right: 1px solid rgba(255, 255, 255, 0.45);
		border-radius: 40px;
		display: block;
		margin-left: -1px;
		margin-top: -2px;
	}

	.button-a:active:before,
	.button-b:active:before {
		border-color: transparent;
	}

	.button-a:after {
		content: 'A';
	}

	.button-b:after {
		content: 'B';
	}

	.button-a:after,
	.button-b:after {
		position: relative;
		display: inline-block;
		margin-top: 14px;
		margin-left: 14px;
		font-size: 9pt;
		font-weight: bold;
	}

	.button-a:active,
	.button-b:active {
		background-color: #400921;
	}

	.selections {
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: 10px;
	}

	.start,
	.select {
		z-index: 1;
		position: relative;
		height: 15px;
		width: 48px;
		border-radius: 15px;
		background-color: #525564;
		transform: rotate(-25deg);
		margin: 5px;
		box-sizing: border-box;
		box-shadow: inset -2px -1px 5px 2px rgba(0, 0, 0, 0.25);
	}

	.start:active,
	.select:active {
		background-color: #3d404c;
	}

	.select:before,
	.start:before {
		z-index: 0;
		position: absolute;
		content: ' ';
		margin-top: -2px;
		margin-left: -2px;
		height: 17px;
		width: 50px;
		border-radius: 15px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		box-shadow: inset -1px -1px 2px 1px rgba(0, 0, 0, 0.25);
	}

	.select:after,
	.start:after {
		position: relative;
		top: 16px;
		font-size: 9pt;
		font-weight: bold;
		color: #0f131e;
	}

	.select:after {
		content: 'SELECT';
	}

	.start:after {
		content: 'START';
	}

	.speakers {
		display: flex;
		justify-content: flex-end;
		margin-top: 60px;
		transform: rotate(-30deg);
	}

	.speakers .grill {
		width: 10px;
		height: 70px;
		border-radius: 20px;
		background-color: #b0bdab;
		border: 1px solid rgba(0, 0, 0, 0.35);
		border-top: 0;
		border-right: 0;
		border-bottom-color: #efefef;
		border-left-color: #efefef;
		margin: 3px;
		box-shadow: inset -1px -1px 2px 1px rgba(0, 0, 0, 0.25);
	}

	.speakers .grill:before {
		display: block;
		margin-left: 1px;
		margin-top: 2px;
		border-radius: 15px;
		content: ' ';
		width: 1px;
		height: 50px;
		border-left: 1px solid black;
	}
</style>
