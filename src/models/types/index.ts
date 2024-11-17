export type SelectOption = {
    readonly value: string;
    readonly label: string;
    action?: () => any;
};

export type MsgType = "success" | "error";