import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
        // 自动匹配 lib/projects 下的 md 文件
        const post = await import(`$lib/projects/${params.slug}.md?raw`);
        
        return {
            content: post.default,
            meta: post.metadata
        };
    } catch (e) {
        throw error(404, `未找到项目: ${params.slug}`);
    }
}