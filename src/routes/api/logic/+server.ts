import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { shapes } from '../../../stores';
import { connections } from '../../../stores';

export const GET: RequestHandler = async ({ params }) => {
	return json(shapes);
};
