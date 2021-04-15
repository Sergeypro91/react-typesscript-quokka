export function customThunk(store: any) {
    return function goNext(next: any) {
        return function getAction(action: any) {
            if (typeof action === 'function') {
                return action(store.dispatch, store.getState);
            }

            return next(action);
        };
    };
}
