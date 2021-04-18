import { SocketSendObj } from 'redux/ui/uiTypes';

type OwnPropsType = {};

export type MapStateToPropsType = {
    counter: number;
    isFetching: boolean;
    isSocketConnected: boolean;
};

export type MapDispatchToPropsType = {
    plusOne: () => void;
    fetchPostAsync: () => void;
    socketSend: (SocketSendObj: SocketSendObj) => void;
};

export type ReactStartTypes = OwnPropsType &
    MapStateToPropsType &
    MapDispatchToPropsType;
