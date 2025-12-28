import { fetchProjects } from '$lib/utils';

export async function load() {
	const projects = await fetchProjects();
	return { projects };
}