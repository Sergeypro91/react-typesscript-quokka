// Types
import { AppActions } from '../../appTypes';

export function* plusCounter(action: AppActions) {
    yield console.log('plusCounter saga', action);
}
