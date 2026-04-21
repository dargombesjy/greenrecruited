<script>
	import { PUBLIC_STRAPI_URL } from '$env/static/public';
	import { goto } from '$app/navigation';
	import { BlocksRenderer } from 'blocks-svelte-renderer';

	let { data } = $props();
	let choicepar = $state({
		next_node: 'cari_jalan_01'
	});

	const slugify = (str = '') => str.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
	function updateChoice(par) {
		choicepar.next_node = par;
	}
	function gotoChoice() {
		let dest = '/simulations/' + choicepar.next_node;
		goto(dest);
		choicepar.next_node = 'cari_jalan_01';
	}
</script>

<div class="mx-auto flex h-screen w-3/4 flex-col p-8">
	{#if data.data[0].image}
		<img
			src="{PUBLIC_STRAPI_URL}{data.data[0].image.url}"
			class="h-40 w-40 self-center rounded-full object-cover"
			alt=""
		/>
	{/if}

	<div class="mt-8 mb-4 text-center text-2xl">{data.data[0].title}</div>
	<div class="my-4 self-center text-xl">
		<BlocksRenderer content={data.data[0].description} />
	</div>

	<div class="self-center text-lg">
		{#each data.data[0].choices as path}
			<div class="flex gap-2">
				<input
					onclick={() => updateChoice(path.next_node)}
					id={slugify(path.choice_name)}
					type="radio"
					name="choices"
					class="peer"
				/>
				<label for={slugify(path.choice_name)} class="peer-checked:bg-red-200"
					>{path.choice_text}</label
				>
			</div>
		{/each}
	</div>
	<button
		class="mt-4 w-48 cursor-pointer self-center rounded-[20px] bg-primary-50 py-4 text-center text-white"
		onclick={() => gotoChoice()}
	>
		{#if choicepar.next_node == 'cari_jalan_01'}
			Reset
		{:else}
			Submit
		{/if}
	</button>
</div>

<style>
</style>
