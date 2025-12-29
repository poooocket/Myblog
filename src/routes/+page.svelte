

<script>
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  
  export let data;
  $: sortedProjects = [...data.projects].sort((a, b) => {
    return b.year - a.year; 
  });
</script>

<div class="container">
  <header in:fly={{ y: 20, duration: 1000 }}>
    <h1>
      Hi，我是蔡克梅，<br/>
      一名热爱创新的产品设计师。
    </h1>

  </header>

  <div class="list">
    {#if sortedProjects && sortedProjects.length > 0}
      {#each sortedProjects as project, i}
        <a 
          href="/projects/{project.slug}" 
          class="project-row"
          in:fly={{ y: 40, duration: 800, delay: i * 100, easing: cubicOut }}
        >
          <div class="image-preview">
            {#if project.image}
              <img src={project.image} alt={project.title} loading="lazy" />
            {:else if project.images && project.images.length > 0}
              <img src={project.images[0]} alt={project.title} loading="lazy" />
            {:else}
              <div class="placeholder"></div>
            {/if}
          </div>

          <div class="title-group">
            <h2>{project.title}</h2>
            <span class="category">{project.category}</span>
          </div>

        </a>
      {/each}
    {:else}
      <p>暂无作品发布</p>
    {/if}
  </div>
</div>

<style>
  .container { 
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 6rem 2rem; 
  }
  
  h1 {
    font-weight: 300;
    font-size: 4rem;
    letter-spacing: -0.02em;
    margin-bottom: 10rem;

  }

  .project-row { 
    display: flex; 
    align-items: stretch; /* 垂直居中 */
    gap: 4rem;           /* 间距 */
    padding: 2.5rem 0; 
    /* border-bottom: 1px solid #eee;  */
    text-decoration: none; 
    color: inherit; 
    transition: opacity 0.3s;
    overflow: hidden;
    flex-direction: row;
    margin-top: 4rem;
  }

  .project-row:nth-child(even) {
    flex-direction: row-reverse;
  }


  .project-row:hover {
    opacity: 0.7;
  }

  /* 2. 新增：图片样式控制 */
  .image-preview {
    flex: 1;
    width: 50%;        /* 根据需求调整宽度 */
    aspect-ratio: 16 / 9; /* 保持固定比例 */
    overflow: hidden;
    background: #f5f5f5;
    border-radius: 24px;
  }

  .image-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
  }

  .project-row:hover .image-preview img {
    transform: scale(1.08); /* 放大 8%，动作轻微才高级 */
  }
  
  .title-group { 
    flex: 1; 
    display: flex;
    flex-direction: column;
    justify-content: center;
  
  }

  h2 { 
    font-weight: 300;     /* 关键：细体 */
    font-size: 2.5rem; 
    margin-bottom: 1rem;
    letter-spacing: 0.01em; 
  }

  .category { 
    color: #333; 
    font-size: 1rem; 
    font-weight: 300;    /* 关键：细体 */
    margin-top: 0.4rem; 
    display: block;
    letter-spacing: 0.05em;
    text-transform: uppercase; /* 可选：全大写增加高级感 */
  }


  /* 移动端适配 */
  @media (max-width: 768px) {
    .project-row, .project-row:nth-child(even) { 
      flex-direction: column; 
      align-items: flex-start; 
      gap: 1rem; 
    }

    .title-group, .project-row:nth-child(even) .title-group { 
      padding: 3rem 2rem; 
      text-align: left; /* 手机端统一左对齐，方便阅读 */
    }
    
    .image-preview { 
      width: 100%; 
    }
    h1 { 
      font-size: 2rem; 
    }
  }
</style>