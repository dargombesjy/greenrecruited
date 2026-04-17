<script>
    import { BlocksRenderer } from "blocks-svelte-renderer";
    let { menu } = $state("longtext");
    let { data } = $props();

    function handleAssign(par) {
        menu = par;
    }

    menu = "video";
</script>

<div class="w-3/4 p-4 mx-auto">
    <h3 class="">{data.data.title}</h3>
    <!-- <div>{data.data.description}</div> -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
        <!-- <div class="col-span-3 w-full aspect-[16/9] border border-solid border-gray"> -->
        <div class="col-span-3 w-full aspect-[16/9] overflow-y-scroll">
            {#if menu == "longtext"}
                <BlocksRenderer content={data.data.long_text} />
            {:else if menu == "video"}
                <iframe class="w-full h-full" src="https://www.youtube.com/embed/{data.data.video_id}" frameborder="0"
                    title="Test" name="test-01"
                ></iframe>
            {:else if menu == "deepdive"}
                <BlocksRenderer content={data.data.deep_dive} />
            {/if}
        </div>
        <div class="col-span-1 w-full">
            <button class="block px-10 py-2 text-[20pt] cursor-pointer text-left"
                onclick={() => handleAssign("longtext")}>
                TUJUAN PEMBELAJARAN
            </button>
            <button class="block px-10 py-2 text-[20pt] cursor-pointer text-left"
                onclick={() => handleAssign("video") }>
                VIDEO
            </button>
            <button class="block px-10 py-2 text-[20pt] cursor-pointer text-left"
                onclick={() => handleAssign("deepdive") }>
                GALI LEBIH DALAM
            </button>
            <button class="block px-10 py-2 text-[20pt] cursor-pointer text-left"
                onclick={() => handleAssign("evaluasi") }>
                EVALUASI
            </button>
            <button class="block px-10 py-2 text-[20pt] cursor-pointer text-left"
                onclick={() => handleAssign("refleksi") }>
                REFLEKSI
            </button>
            <!-- <a href="/test" class="block px-10 py-2 text-[20pt]">GALI LEBIH DALAM</a>
            <a href="/test" class="block px-10 py-2 text-[20pt]">EVALUASI</a>
            <a href="/test" class="block px-10 py-2 text-[20pt]">REFLEKSI</a> -->
        </div>
        <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
            <a href="javascript:void(0)" class="block" aria-label="product-wrapper">
                <div class="w-full aspect-[8/6] p-3">
                    <img src="" alt="" class="w-full h-full object-contain">
                </div>
                <div class="p-6">
                    <hr class="border border-gray-300 mb-6" />
                    <div>
                        <h4>Introduction to Recruitment</h4>
                        <h4>2nd line</h4>
                    </div>
                </div>
            </a>
        </div>

        <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
            <a href="javascript:void(0)" class="block" aria-label="product-wrapper">
                <div class="w-full aspect-[8/6] p-3">
                    <img src="" alt="" class="w-full h-full object-contain">
                </div>
                <div class="p-6">
                    <hr class="border border-gray-300 mb-6" />
                    <div>
                        <h4>Introduction to Recruitment</h4>
                        <h4>2nd line</h4>
                    </div>
                </div>
            </a>
        </div>

        <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
            <a href="javascript:void(0)" class="block" aria-label="product-wrapper">
                <div class="w-full aspect-[8/6] p-3">
                    <img src="" alt="" class="w-full h-full object-contain">
                </div>
                <div class="p-6">
                    <hr class="border border-gray-300 mb-6" />
                    <div>
                        <h4>Introduction to Recruitment</h4>
                        <h4>2nd line</h4>
                    </div>
                </div>
            </a>
        </div>

        <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 relative">
            <a href="javascript:void(0)" class="block" aria-label="product-wrapper">
                <div class="w-full aspect-[8/6] p-3">
                    <img src="" alt="" class="w-full h-full object-contain">
                </div>
                <div class="p-6">
                    <hr class="border border-gray-300 mb-6" />
                    <div>
                        <h4>Introduction to Recruitment</h4>
                        <h4>2nd line</h4>
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>
