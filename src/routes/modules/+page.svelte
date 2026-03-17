<script>
    import { PUBLIC_STRAPI_URL } from "$env/static/public";
    let { data } = $props();
</script>


<div class="w-3/4 p-4 mx-auto">
    <div>Header and filter</div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
        {#each data.data as item}
        <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
            <a href="/modules/{item.documentId}" class="block" aria-label="product-wrapper">
                <div class="w-full aspect-[8/6] p-3">
                    <img src="{PUBLIC_STRAPI_URL}{item.image.url}" alt="" class="w-full h-full object-fill">
                </div>
                <div class="p-6">
                    <hr class="border border-gray-300 mb-6" />
                    <div>
                        <h4>{item.title}</h4>
                        <h4>{item.description}</h4>
                    </div>
                </div>
            </a>
        </div>
        {/each}
    </div>
</div>