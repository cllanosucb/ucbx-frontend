export interface Semestres {
    ok: boolean;
    data: Datum[];
}

export interface Datum {
    id_periodo_academico: number;
    resumido: string;
    descripcion: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    id_regional: number;
    sigla_regional: string;
    nombre_regional: string;
    estado: number;
    fecha_registro: Date;
    usuario_registro: string;
}

export interface Rsemestre {
    id_periodo_academico: number;
    resumido: string;
    id_regional: number;
    sigla_regional: string;
    nombre_regional: string;
    name: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toSemestres(json: string): Semestres {
        return JSON.parse(json);
    }

    public static semestresToJson(value: Semestres): string {
        return JSON.stringify(value);
    }
}
