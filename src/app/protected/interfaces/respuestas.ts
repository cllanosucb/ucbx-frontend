
export interface Success {
    ok:   boolean;
    data: Data;
}

export interface Data {
    msg:  string;
    data: any;
}

export interface Error {
    ok:    boolean;
    error: ErrorClass;
}

export interface ErrorClass {
    msg: string;
    err: any | null;
}



