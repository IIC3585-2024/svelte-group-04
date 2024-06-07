import { getRandomTrail } from '../services/trailsService';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const trails = []
  for (let i = 0; i < 4; i++) {
    trails.push(await getRandomTrail())
  }
  return {
    trails
  };
}
