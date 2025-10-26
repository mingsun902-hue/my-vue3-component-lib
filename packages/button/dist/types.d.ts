import { PropType } from 'vue';
declare const buttonTypes: readonly ["primary", "success", "warning", "danger"];
declare const buttonSize: readonly ["small", "medium", "large"];
export declare const buttonProps: {
    readonly type: {
        readonly type: PropType<(typeof buttonTypes)[number]>;
        readonly default: "primary";
        readonly values: readonly ["primary", "success", "warning", "danger"];
    };
    readonly size: {
        readonly type: PropType<(typeof buttonSize)[number]>;
        readonly default: "medium";
        readonly values: readonly ["small", "medium", "large"];
    };
    readonly disabled: BooleanConstructor;
    readonly loading: BooleanConstructor;
    readonly circle: BooleanConstructor;
    readonly round: BooleanConstructor;
};
export {};
