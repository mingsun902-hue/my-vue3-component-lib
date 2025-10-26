import { PropType } from 'vue';
declare const sizeTypes: readonly ["small", "medium", "large"];
export declare const inputProps: {
    readonly modelValue: StringConstructor;
    readonly size: {
        readonly type: PropType<(typeof sizeTypes)[number]>;
        readonly values: readonly ["small", "medium", "large"];
        readonly default: "medium";
    };
    readonly placeholder: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
};
export {};
