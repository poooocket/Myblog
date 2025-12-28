// // src/lib/utils.js
// export async function fetchProjects() {
//     const allProjectFiles = import.meta.glob('$lib/projects/*.md?raw');
//     const iterableProjectFiles = Object.entries(allProjectFiles);

//     const allProjects = await Promise.all(
//         iterableProjectFiles.map(async ([path, resolver]) => {
//             const { metadata } = await resolver();
//             const slug = path.split('/').pop().slice(0, -3); // 去掉 .md
//             return { ...metadata, slug };
//         })
//     );

//     return allProjects;
// }


export async function fetchProjects() {
    // 移除 ?raw，直接读取模块
    const allProjectFiles = import.meta.glob('$lib/projects/*.md', { eager: true });
    
    const allProjects = Object.entries(allProjectFiles).map(([path, module]) => {
        const slug = path.split('/').pop().slice(0, -3);
        // mdsvex 会把 --- 里的内容放在 metadata 属性中
        return { 
            ...module.metadata, 
            slug 
        };
    });

    // 可以在这里加一个过滤，确保只有带标题的才返回
    return allProjects.filter(project => project.title);
}