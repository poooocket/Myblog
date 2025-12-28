// src/lib/utils.js
export async function fetchProjects() {
    const allProjectFiles = import.meta.glob('$lib/projects/*.md');
    const iterableProjectFiles = Object.entries(allProjectFiles);

    const allProjects = await Promise.all(
        iterableProjectFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const slug = path.split('/').pop().slice(0, -3); // 去掉 .md
            return { ...metadata, slug };
        })
    );

    return allProjects;
}