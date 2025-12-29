// src/lib/utils.js
export async function fetchProjects() {
  // 1. 去掉 ?raw，改用相对路径
  const modules = import.meta.glob('../lib/projects/*.md');

  const projects = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      // 2. resolver() 现在返回的是一个包含 metadata 的 Svelte 组件模块
      const mod = await resolver();

      // 获取文件名作为 slug
      const slug = path.split('/').pop().replace('.md', '');

      // 3. mdsvex 会将 frontmatter 放在 metadata 属性中
      if (mod && typeof mod === 'object' && 'metadata' in mod) {
        return {
          ...mod.metadata,
          slug
        };
      }
      return { slug }; // 回退方案
    })
  );

  // 可选：按日期排序
  return projects.sort((a, b) => new Date(b.date) - new Date(a.date));
}