<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink
	} from 'flowbite-svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="">
	<div class="sticky top-0 right-0 left-0 pb-8">
		<Navbar>
			<NavBrand href="/">
				<img src="/images/logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
				<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
					>GreenRecruitED</span
				>
			</NavBrand>
			<NavHamburger />
			<NavUl>
				<NavLi href="/about">About</NavLi>
				<NavLi href="/modules">Modules</NavLi>
				<NavLi href="/reflection">Reflection</NavLi>
				<NavLi href="/resources">Resources</NavLi>
				<NavLi href="/simulation">Simulation</NavLi>
			</NavUl>
			<NavUl>
				<NavLi href="/start">Get started</NavLi>
			</NavUl>
		</Navbar>
	</div>

	<div class="m-8">
		<!-- flex flex-row items-center justify-center md:flex-row"> -->
		{@render children()}
	</div>
</div>
<!-- <Footer
	footerType="sitemap"
	class="item-center absolute start-0 bottom-0 container mx-auto mt-6 mb-8 flex flex-row justify-center"
>
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
</style>
