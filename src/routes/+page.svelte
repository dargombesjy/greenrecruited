<script>
	// import { Heading, P, Card, Button } from 'flowbite-svelte';
	// import { ArrowRightOutline } from 'flowbite-svelte-icons';
	// let vCard = false;
	import { PUBLIC_STRAPI_URL } from '$env/static/public';
	import RightArrow from '$lib/RightArrow.svelte';
	let { data } = $props();
</script>

<div class="mx-8 flex h-screen pb-8">
	<div class="my-auto">
		<h2 class="mb-4 text-[60pt] font-bold text-primary-50 dark:text-primary-500">GreenRecruitED</h2>
		<div class="text-[28pt]">Sustainable Recruitment Learning Platform</div>
		<!-- <div class="text-[28pt]">"Learning Recruitment for a Sustainable Future"</div> -->
		 <div class="text-[28pt]">{data.data.subtitle}</div>
	</div>
</div>

<div class="mx-8 flex h-screen flex-col">
	<video class="w-full" muted autoplay loop playsinline controls disablepictureinpicture>
		<!-- <track kind="captions" /> -->
		<source src="{PUBLIC_STRAPI_URL}{data.data.intro_video.url}">
	</video>
</div>

<div class="mt-10 grid h-screen grid-cols-3 content-center gap-2">
	{#each data.data.block_1s as block1_item}
		<div class="h-96 bg-sky-100/75 hover:bg-sky-500">
			<div class="m-6">
				<p class="mb-2 h-32 text-[32pt] font-bold tracking-tight text-gray-900 dark:text-white">
					{block1_item.title}
				</p>
				<p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">
					{block1_item.description}
				</p>
				<button
					class="inline-flex w-40 items-center justify-center rounded-lg bg-primary-50 px-5 py-2.5 text-center text-sm font-medium text-white focus-within:ring-4 focus-within:ring-primary-300 focus-within:outline-hidden hover:bg-primary-800"
				>
					Lebih jauh <RightArrow class="text-white" />
				</button>
			</div>
		</div>
	{/each}
</div>

<div class="mt-10 grid h-screen grid-cols-3 grid-rows-3 gap-2 content-center text-[20pt]">
	<div class="rounded-[20px] bg-primary-50 content-center text-center text-white">
		<p>{data.data.block_3s[0].title}</p>
	</div>
	<div class="col-start-2 row-start-2 rounded-[20px] bg-primary-50 content-center text-center text-white">
		<p>{data.data.block_3s[1].title}</p>
	</div>
	<div class="col-start-3 row-start-3 rounded-[20px] bg-primary-50 content-center text-center text-white">
		<p>{data.data.block_3s[2].title}</p>
	</div>
</div>

<div class="mx-auto mt-10 flex h-screen flex-col justify-center">
	<div class="text-center">
		<p>{data.data.lebih_lanjut}</p>
		<button class="mt-4 cursor-pointer rounded-[30px] bg-primary-50 px-8 py-4 text-white"
			>Selengkapnya..</button
		>
	</div>
</div>
