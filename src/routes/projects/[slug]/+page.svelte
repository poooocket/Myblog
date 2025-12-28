<script>
    export let data;
    const { content, meta } = data;
</script>

<article class="project-container">
    <div class="prose">
        <svelte:component this={content} />
    </div>
</article>

<style>
    .prose {
        max-width: 800px;
        margin: 0 auto;
    }
    /* 统一设置 Markdown 里的图片和标题样式 */
    .prose :global(img) {
        width: 100%;
        border-radius: 8px;
        margin: 2rem 0;
    }

    /* 针对 Markdown 容器的全局细体设置 */
    .prose {
        /* 使用 300 (Light) 或 200 (Extra Light) */
        font-weight: 300; 
        line-height: 1.8;
        color: #333;
    }

    /* 针对所有标题的细体覆盖 */
    .prose :global(h1),
    .prose :global(h2),
    .prose :global(h3),
    .prose :global(h4),
    .prose :global(strong) {
        font-weight: 300; 
        letter-spacing: -0.04em; 
    }

    .prose :global(h2) {
        font-size: 2rem;
        margin-top: 4rem;
        margin-bottom: 1.5rem;
    }

    .prose :global(h3) {
        font-size: 1.5rem;
        margin-top: 3rem;
        margin-bottom: 1rem;
    }

    /* 即使是加粗文本，在细体风格下也可以设为 400 (Regular) 而不是默认的 700 */
    .prose :global(strong) {
        font-weight: 400;
        color: #000;
    }

    
</style>