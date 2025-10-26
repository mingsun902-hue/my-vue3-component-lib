declare const typeProps: readonly ["loading", "success", "warning", "info", "error"];
export interface MessageOptions {
    message: string;
    type?: (typeof typeProps)[number];
    duration?: number;
    promise?: Promise<MessageOptions>;
    onClose?: () => void;
}
export {};
