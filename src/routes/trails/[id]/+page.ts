import { getTrail } from '../../../services/trailsService';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const trail = await getTrail(params.id);
	return {
		trail
	};
}
