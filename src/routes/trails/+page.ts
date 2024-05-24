import { getTrails } from '../../services/trailsService';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const trails = await getTrails();
	return {
		trails
	};
}
