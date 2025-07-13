<script>
	import QuestionMark from '$lib/components/question_mark.svelte';
</script>

<footer>
	<p>
		Website and analysis by
		<a href="https://www.tommasoprinetti.com" target="_blank">Tommaso Prinetti ↗︎</a>
	</p>
</footer>

<style>
	footer {
		width: 100%;
		height: fit-content;
		background-color: #ebebeb;
		position: absolute;
		bottom: 0%;
		right: 50%;
		transform: translateX(50%);
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 10px;
		padding-bottom: 10px;
		border-radius: 20px 20px 0px 0px;
	}

	footer p {
		font-size: 14px;
		font-weight: 400;
		color: #000000;
		line-height: 113.372%;
	}

	a {
		text-decoration: underline;
		text-underline-offset: 4px;
		text-decoration-thickness: 1px;
		color: #000000;
		transition: transform 0.3s ease-in-out;
	}

	a:hover {
		color: #000000;
		transform: scale(1.05);
		transition: transform 0.3s ease-in-out;
	}
</style>
