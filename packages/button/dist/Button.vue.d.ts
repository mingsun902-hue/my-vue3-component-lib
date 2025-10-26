declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLButtonElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly type: {
        readonly type: import('vue').PropType<"primary" | "success" | "warning" | "danger">;
        readonly default: "primary";
        readonly values: readonly ["primary", "success", "warning", "danger"];
    };
    readonly size: {
        readonly type: import('vue').PropType<"small" | "medium" | "large">;
        readonly default: "medium";
        readonly values: readonly ["small", "medium", "large"];
    };
    readonly disabled: BooleanConstructor;
    readonly loading: BooleanConstructor;
    readonly circle: BooleanConstructor;
    readonly round: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly type: {
        readonly type: import('vue').PropType<"primary" | "success" | "warning" | "danger">;
        readonly default: "primary";
        readonly values: readonly ["primary", "success", "warning", "danger"];
    };
    readonly size: {
        readonly type: import('vue').PropType<"small" | "medium" | "large">;
        readonly default: "medium";
        readonly values: readonly ["small", "medium", "large"];
    };
    readonly disabled: BooleanConstructor;
    readonly loading: BooleanConstructor;
    readonly circle: BooleanConstructor;
    readonly round: BooleanConstructor;
}>> & Readonly<{}>, {
    readonly type: "primary" | "success" | "warning" | "danger";
    readonly size: "small" | "medium" | "large";
    readonly disabled: boolean;
    readonly loading: boolean;
    readonly circle: boolean;
    readonly round: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLButtonElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
