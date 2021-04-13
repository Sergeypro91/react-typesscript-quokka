export interface State {
    type: number;
}

export const types = {
    TYPE: 'TYPE',
};

interface Type {
    type: typeof types.TYPE;
}

export type Actions = Type;
