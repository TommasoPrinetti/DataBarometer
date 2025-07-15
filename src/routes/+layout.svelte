<script>
</script>

<slot />

<style>
	:global(*) {
		font-family: 'Rethink Sans', sans-serif;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-style: normal;
	}

	:global(html) {
		overflow-x: hidden;
		max-width: 100%;
	}

	:global(body) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	:global(header) {
		background: transparent;
		position: fixed;
		top: -100%;
		left: 0;
		width: 100%;
		z-index: 100;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0px 20px;
		color: #fff;
		font-size: 1.2rem;
		font-weight: 600;
		height: 45px;
		opacity: 0;
		transition:
			top 1.2s cubic-bezier(0.165, 0.84, 0.44, 1),
			opacity 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	:global(header.in) {
		top: 0;
		transition:
			top 1.2s cubic-bezier(0.165, 0.84, 0.44, 1),
			opacity 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
		opacity: 1;
	}

	:global(header > div) {
		display: flex;
		flex-direction: row;
		column-gap: 20px;
	}

	:global(header > div > button:hover) {
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 4px;
		text-decoration-color: #000;
	}

	:global(.gd_barometer_logo) {
		width: 100px;
		height: auto;
		z-index: 2;
	}

	:global(button) {
		all: unset;
		background: transparent;
		border: none;
		color: black;
		cursor: pointer;
		display: inline-block;
		font: inherit;
		line-height: normal;
		margin: 0;
		overflow: visible;
		padding: 0;
		text-align: center;
		text-decoration: none;
		text-transform: none;
		user-select: none;
		-webkit-user-select: none;
		vertical-align: middle;
		white-space: normal;
		width: auto;
		opacity: unset;
	}

	:global(h1) {
		font-size: 48px;
		line-height: auto;
		font-weight: 200;
		font-style: normal;
		text-transform: uppercase;
		line-height: 113.372%;
		letter-spacing: -1px;
		user-select: text;
		-webkit-user-select: text;
		-moz-user-select: text;
		-ms-user-select: text;
	}

	::selection {
		color: whitesmoke;
		background: black;
	}

	h1 > span {
		font-style: italic;
		text-decoration: underline;
		text-decoration-thickness: 4px;
		text-underline-offset: 4px;
		transition: all 0.3s ease-in-out;
	}

	:global(h2) {
		font-size: 24px;
		line-height: auto;
		font-weight: 200;
	}

	:global(h3) {
		font-size: 18px;
		line-height: auto;
		font-weight: 200;
	}

	:global(p) {
		font-size: 16px;
		line-height: auto;
		font-weight: 200;
	}
</style>
