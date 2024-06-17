import type { Actions } from "@sveltejs/kit";


export const actions: Actions = {
    bingo: async ( {request}) => {
        return {
            status: 200,
            body: {
                message: "Hello, World!"
            }
        };
    }
};