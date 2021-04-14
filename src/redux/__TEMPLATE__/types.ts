export interface State {
    type: number;
}

export const types = {
    // Sync
    TYPE: 'TYPE',

    // Async
};

interface Type {
    type: typeof types.TYPE;
}

export type Actions = Type;
