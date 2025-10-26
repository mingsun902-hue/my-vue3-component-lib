declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly modelValue: StringConstructor;
    readonly size: {
        readonly type: import('vue').PropType<"small" | "medium" | "large">;
        readonly values: readonly ["small", "medium", "large"];
        readonly default: "medium";
    };
    readonly placeholder: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly modelValue: StringConstructor;
    readonly size: {
        readonly type: import('vue').PropType<"small" | "medium" | "large">;
        readonly values: readonly ["small", "medium", "large"];
        readonly default: "medium";
    };
    readonly placeholder: StringConstructor;
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    readonly size: "small" | "medium" | "large";
    readonly disabled: boolean;
    readonly clearable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
