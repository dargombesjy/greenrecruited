<script>
	// import { Heading, P, Card, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	let vCard = false;
	
</script>

<div class="mx-8 flex h-screen pb-8">
	<div class="my-auto">
		<h2 class="mb-4 text-[60pt] font-bold text-primary-50 dark:text-primary-500">GreenRecruitED</h2>
		<div class="text-[28pt]">Sustainable Recruitment Learning Platform</div>
		<div class="text-[28pt]">"Learning Recruitment for a Sustainable Future"</div>
	</div>
</div>

<div class="mx-8 flex h-screen flex-col">
	<video class="w-full" src="/videos/sample01.mp4" controls><track kind="captions" /></video>
</div>

<div class="mt-10 grid h-screen grid-cols-3 content-center gap-2">
	<div class="bg-sky-100/75 hover:bg-sky-500 h-96">
		<div class="m-6">
			<p class="h-32 mb-2 text-[32pt] font-bold tracking-tight text-gray-900 dark:text-white">
				LESSON PLAN
      </p>
			<p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">
				Penjelasan Lesson Plan
			</p>
			<button class="text-center font-medium inline-flex items-center justify-center text-white bg-primary-50 hover:bg-primary-800 focus-within:ring-primary-300 px-5 py-2.5 text-sm focus-within:ring-4 focus-within:outline-hidden rounded-lg w-40">
				Lebih jauh <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
			</button>
		</div>
	</div>

  <div class="bg-sky-100/75 hover:bg-sky-500 h-96">
		<div class="m-6">
			<p class="h-32 mb-2 text-[32pt] font-bold tracking-tight text-gray-900 dark:text-white">
				WEBSITE GUIDELINE
      </p>
			<p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">
				Panduan penggunaan website
			</p>
			<button class="text-center font-medium inline-flex items-center justify-center text-white bg-primary-50 hover:bg-primary-800 focus-within:ring-primary-300 px-5 py-2.5 text-sm focus-within:ring-4 focus-within:outline-hidden rounded-lg w-40">
				Lebih jauh <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
			</button>
		</div>
	</div>

  <div class="bg-sky-100/75 hover:bg-sky-500 h-96">
		<div class="m-6">
			<p class="h-32 mb-2 text-[32pt] font-bold tracking-tight text-gray-900 dark:text-white">
				DEVELOPER & CONTACT
      </p>
			<p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">
				Hubungi Developer
			</p>
			<button class="text-center font-medium inline-flex items-center justify-center text-white bg-primary-50 hover:bg-primary-800 focus-within:ring-primary-300 px-5 py-2.5 text-sm focus-within:ring-4 focus-within:outline-hidden rounded-lg w-40">
				Lebih jauh <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
			</button>
		</div>
	</div>
	
</div>

<div class="mt-10 grid h-screen grid-cols-3 grid-rows-3 gap-2">
	<div class="">Leftmost</div>
	<div class="col-start-2 row-start-2">Center</div>
	<div class="col-start-3 row-start-3">Rightmost</div>
</div>

<div class="mx-auto mt-10 h-screen flex flex-col justify-center">
	<div class="text-center">
		<p>Pelajari lebih lanjut tentang rekrutmen berbasis keberlanjutan</p>
		<button class="mt-4 cursor-pointer rounded-[30px] bg-primary-50 py-4 px-8 text-white">Selengkapnya..</button>
	</div>
</div>
