declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: BooleanConstructor;
    title: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    closeOnClickMask: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnPressEscape: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeClose: FunctionConstructor;
    zIndex: NumberConstructor;
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    close: (...args: any[]) => void;
    confirm: (...args: any[]) => void;
    cancel: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: BooleanConstructor;
    title: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    closeOnClickMask: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnPressEscape: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeClose: FunctionConstructor;
    zIndex: NumberConstructor;
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onClose?: (...args: any[]) => any;
    onConfirm?: (...args: any[]) => any;
    onCancel?: (...args: any[]) => any;
}>, {
    modelValue: boolean;
    title: string;
    width: string;
    showClose: boolean;
    confirmText: string;
    cancelText: string;
    closeOnClickMask: boolean;
    closeOnPressEscape: boolean;
    lockScroll: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
