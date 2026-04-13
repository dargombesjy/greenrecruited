<script>
	import { PUBLIC_STRAPI_URL } from '$env/static/public';
	import Footer from '$lib/Footer.svelte';
	let { data } = $props();
</script>

<div class="mx-auto w-3/4">
	<p>VIDEO</p>
	<div class="flex gap-2 overflow-x-auto">
	{#each data.data.videos as video}
		<div class="relative w-80 flex-none">
			<img class="h-48 w-full object-cover" src="{PUBLIC_STRAPI_URL}{video.thumbnail.url}" alt="" />
			<!-- <div class="absolute top-[70%] px-2">{video.title}</div> -->
			<!-- <div class="absolute inset-0 flex items-center">
            <p>Penggunaan e-recruitment</p>
        </div> -->
		</div>
	{/each}
	</div>
	
	<p>ARTIKEL</p>
	<div class="flex gap-2 overflow-x-auto">
	{#each data.data.articles as article}
		<div class="relative w-80 flex-none">
			<img class="h-48 w-full object-cover" src="{PUBLIC_STRAPI_URL}{article.thumbnail.url}" alt="" />
			<!-- <div class="absolute top-[70%] px-2">{video.title}</div> -->
			<!-- <div class="absolute inset-0 flex items-center">
            <p>Penggunaan e-recruitment</p>
        </div> -->
		</div>
	{/each}
	</div>

	<p>BERITA</p>
	<div class="flex gap-2 overflow-x-auto">
	{#each data.data.news as news}
		<div class="relative w-80 flex-none">
			<img class="h-48 w-full object-cover" src="{PUBLIC_STRAPI_URL}{news.thumbnail.url}" alt="" />
			<!-- <div class="absolute top-[70%] px-2">{video.title}</div> -->
			<!-- <div class="absolute inset-0 flex items-center">
            <p>Penggunaan e-recruitment</p>
        </div> -->
		</div>
	{/each}
	</div>
</div>

<Footer />
