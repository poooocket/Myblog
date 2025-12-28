<script>
  export let reverse = false; // 是否反转：默认文左图右
</script>

<div class="side-by-side" class:reverse>
  <div class="text">
    <slot name="text" />
  </div>
  <div class="media">
    <slot name="media" />
  </div>
</div>

<style>
  .side-by-side {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin: 6rem 0;
    
    /* 核心 1：顶部对齐 */
    align-items: start; 
  }

  /* 核心 2：实现左右调换 */
  .reverse {
    /* 在桌面端将列顺序反转 */
    direction: rtl; 
  }
  
  .reverse > div {
    /* 恢复内部文字的正常排列方向 */
    direction: ltr; 
  }

  @media (max-width: 768px) {
    .side-by-side {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    /* 移动端通常保持“文上图下”或“图上文下”，取消反转 */
    .reverse {
      display: flex;
      flex-direction: column;
    }
    /* 如果希望移动端始终图在上，可以根据需要调整 flex-direction */
  }
</style>