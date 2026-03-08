<script>
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

    let { children } = $props();
</script>

<!-- <div class="container m-8"> -->
{@render children()}
<!-- </div> -->

<Footer
	footerType="sitemap"
	class="item-center flex flex-row justify-center"
	// class="item-center absolute start-0 bottom-0 container mx-auto mt-6 mb-8 flex flex-row justify-center"
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
</Footer>