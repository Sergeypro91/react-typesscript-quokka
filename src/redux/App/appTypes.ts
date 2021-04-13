export interface AppState {
    counter: number;
}

export const PLUS_ONE = 'PLUS_ONE';

interface AppCounter {
    type: typeof PLUS_ONE;
}

export type AppActions = AppCounter;
