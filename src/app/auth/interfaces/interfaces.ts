export interface Login {
    ok:   boolean;
    data: Data;
}

export interface Data {
    msg:   string;
    token: string;
}

export interface Error {
    mensajes: Mensaje[];
}

export interface Mensaje {
    tipo:        string;
    descripcion: string;
}
