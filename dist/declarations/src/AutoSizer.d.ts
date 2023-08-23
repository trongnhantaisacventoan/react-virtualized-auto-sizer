import { Component, ReactElement } from "react";
import { DetectElementResize } from "./vendor/detectElementResize.js";
import { Props } from "./types.js";
type State = {
    height: number;
    scaledHeight: number;
    scaledWidth: number;
    width: number;
};
export declare class AutoSizer extends Component<Props, State> {
    state: {
        height: number;
        scaledHeight: number;
        scaledWidth: number;
        width: number;
    };
    _autoSizer: HTMLElement | null;
    _detectElementResize: DetectElementResize | null;
    _parentNode: HTMLElement | null;
    _resizeObserver: ResizeObserver | null;
    _timeoutId: number | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): ReactElement;
    _onResize: () => void;
    _setRef: (autoSizer: HTMLElement | null) => void;
}
export {};
