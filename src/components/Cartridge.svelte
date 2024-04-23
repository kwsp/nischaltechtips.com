<script lang="ts">
	// Adapted from https://codepen.io/cassidoo/pen/BaKrZZw
	import { onMount } from 'svelte';

	let cartridge: HTMLDivElement;
	const colors = ['red', 'blue', 'yellow', 'green'];
	let colorIdx = 0;
	let currentColor = 'red';

	let timeout: number;
	function colorswap() {
		colorIdx = (colorIdx + 1) % colors.length;
		currentColor = colors[colorIdx];
		timeout = setTimeout(colorswap, 1000);
	}

	onMount(() => {
		timeout = setTimeout(colorswap, 1000);
		return () => {
			clearTimeout(timeout);
		};
	});
</script>

<div class="cartridge {currentColor}" bind:this={cartridge}>
	<div class="top"></div>
	<div class="sticker">
		<div class="ball"></div>
	</div>
	<div class="bottom"></div>
</div>

<style lang="scss">
	// $bg: #e4ecbf;
	// $bgshadow: #c0c49e;
	$bg: rgb(141, 127, 214);
	$bgshadow: rgb(98, 88, 149);
	// $bgshadow: darken($bg, 30%);

	$black: #26282f;
	$border: 8px solid $black;
	$red: #b53037;
	$yellow: #dac72e;
	$blue: #164bbe;
	$green: #4bbb81;
	$gray: #a6a9b7;
	$white: #e6ecf3;

	html,
	body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background: $bg;
	}

	@mixin cartridgeparts($basecolor) {
		.top {
			position: absolute;
			top: 16px;
			left: 50%;
			transform: translateX(-50%);
			width: 200px;
			height: 40px;
			background: linear-gradient(to bottom, transparent, transparent 50%, $black 50%, $black);
			background-size: 100% 12px;
			&::before {
				display: block;
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 146px;
				height: 46px;
				background: darken($basecolor, 15%);
				border: $border;
				border-color: darken($basecolor, 5%);
				border-radius: 30px;
			}
			&::after {
				display: block;
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 130px;
				height: 30px;
				background: darken($basecolor, 15%);
				border: $border;
				border-radius: 30px;
			}
		}

		.sticker {
			position: absolute;
			top: 74px;
			left: 50%;
			transform: translateX(-50%);
			width: 170px;
			height: 110px;
			background: $basecolor;
			border: $border;
			border-left: none;
			border-right: none;
			display: flex;
			justify-content: space-between;
			&::before,
			&::after {
				display: block;
				content: '';
				position: relative;
				top: -8px;
				width: 16px;
				height: 100%;
				background: $gray;
				border: $border;
			}
			.ball {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 80px;
				height: 80px;
				background: linear-gradient(
					to bottom,
					darken($red, 5%),
					darken($red, 5%) 50%,
					$white 50%,
					$white
				);
				border: $border;
				border-radius: 50%;
				&::before,
				&::after {
					display: block;
					content: '';
					position: absolute;
				}
				&::before {
					top: calc(50% - 4px);
					left: -2px;
					width: calc(100% + 4px);
					height: 8px;
					background: $black;
				}
				&::after {
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 20px;
					height: 20px;
					background: $white;
					border: $border;
					border-radius: 50%;
				}
			}
		}

		.bottom {
			position: absolute;
			left: 50%;
			bottom: -12px;
			transform: translateX(-50%);
			border: 18px solid transparent;
			border-top: 18px solid darken($basecolor, 15%);
			&::before,
			&::after {
				display: block;
				content: '';
				position: absolute;
				bottom: -6px;
				width: 8px;
				height: 100px;
				background: darken($basecolor, 15%);
			}
			&::before {
				left: -100px;
			}
			&::after {
				right: -100px;
			}
		}
	}

	@mixin cartridgetheme($basecolor) {
		background: darken($basecolor, 5%);
		@include cartridgeparts($basecolor);
	}

	.cartridge {
		position: relative;
		width: 200px;
		height: 230px;
		margin: 5px 20px 15px;
		border: $border;
		border-top-left-radius: 20px;
		box-shadow: -8px 8px $bgshadow;
		&::before,
		&::after {
			display: block;
			content: '';
			position: absolute;
			top: -8px;
			right: -8px;
			width: 12px;
			height: 5px;
			border: $border;
			border-top-color: $bg;
			border-right-color: $bg;
		}
		&::after {
			background: $bg;
			border: $border;
			width: 20px;
			height: 13px;
			border-top: 0;
			border-right: 0;
		}

		@include cartridgetheme($red);

		&.blue {
			@include cartridgetheme($blue);
		}

		&.yellow {
			@include cartridgetheme($yellow);
		}

		&.green {
			@include cartridgetheme($green);
		}
	}
</style>
