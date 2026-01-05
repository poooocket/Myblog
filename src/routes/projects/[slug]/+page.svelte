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
    .project-container {
        width: 100%;
        /* 确保背景色或其他布局不会溢出 */
    }

    .prose {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 2rem;
        box-sizing: border-box;
        font-weight: 300;
        line-height: 1.6;
        color: #333;
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
        line-height: 1.4;
        color: #333;
    }

    /* 针对所有标题的细体覆盖 */
    .prose :global(h2),
    .prose :global(h3),
    .prose :global(h4),
    .prose :global(strong) {
        font-weight: 400; 
        letter-spacing: -0.04em; 
    }

    .prose :global(h2) {
        font-size: 2.5rem;
    }

    .prose :global(h3) {
        font-size: 1.5rem;
    }

    @media (max-width: 768px) {
        .prose {
            padding: 0 2rem; /* 手机端间距稍微收紧一点点，给文字更多空间 */
        }

        .prose :global(h2) {
            font-size: 1.5rem; /* 手机端 2.5rem 太大了，会导致长单词断行 */
            margin-top: 2.5rem;
        }

        .prose :global(h3) {
            font-size: 1.25rem;
            margin-top: 2rem;
        }

        /* 手机端图片通常不需要圆角，或者小一点更硬朗 */
        .prose :global(img) {
            margin: 1.5rem 0;
            border-radius: 4px;
        }
    }
    
</style>