export declare function useBem(block: string): {
    b: () => string;
    e: (element?: string) => string;
    m: (modify?: string) => string;
    em: (element?: string, modify?: string) => string;
    is: (state: string, active?: boolean) => string;
};
