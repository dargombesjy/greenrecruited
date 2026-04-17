<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import {
		// Navbar,
		// NavBrand,
		// NavLi,
		// NavUl,
		// NavHamburger,
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink
	} from 'flowbite-svelte';
	import Navbar from '$lib/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="">
	
	<div class="sticky inset-0 p-1 bg-primary-300">
		<Navbar />
	</div>

	<div class="m-8">
		<!-- flex flex-row items-center justify-center md:flex-row"> -->
		{@render children()}
	</div>
</div>

<!-- <Footer footerType="sitemap" class="item-center flex flex-row justify-center">
	<div class="">
		<h2 class="mb-2 text-sm font-semibold text-gray-400 uppercase">About</h2>
		<FooterLinkGroup class="text-gray-900 uppercase dark:text-gray-200">
			<FooterLink class="mb-0" href="/">Lesson Plan</FooterLink>
			<FooterLink class="mb-0" href="/">Guideline</FooterLink>
			<FooterLink class="mb-0" href="/">Contact</FooterLink>
		</FooterLinkGroup>
	</div>
	<div>
		<h2 class="mb-2 text-sm font-semibold text-gray-400 uppercase">Product</h2>
		<FooterLinkGroup class="text-gray-900 dark:text-gray-200">
			<FooterLink class="mb-0" href="/">LEARNING MODULES</FooterLink>
			<FooterLink class="mb-0" href="/">REFLECTION</FooterLink>
			<FooterLink class="mb-0" href="/">SIMULATION</FooterLink>
		</FooterLinkGroup>
	</div>
	<div>
		<h2 class="mb-2 text-sm font-semibold text-gray-400 uppercase">Resources</h2>
		<FooterLinkGroup class="text-gray-900 dark:text-gray-200">
			<FooterLink class="mb-0" href="/">VIDEOS</FooterLink>
			<FooterLink class="mb-0" href="/">ARTICLES</FooterLink>
			<FooterLink class="mb-0" href="/">NEWS</FooterLink>
		</FooterLinkGroup>
	</div>
</Footer> -->

<style>
	:global(body) {
		min-height: 100vh;
	}
	.bg-img {
		position: absolute;
    	height: 100%;
    	width: 100%;
    	top: 0;
    	background-image: url("https://st3.depositphotos.com/4478807/19082/i/450/depositphotos_190824428-stock-photo-white-geometric-hexagonal-abstract-background.jpg");
    	z-index: -1;
	}
</style>
