// To parse this data:
//
//   import { Convert, Usuario } from "./file";
//
//   const usuario = Convert.toUsuario(json);

export interface Usuario {
    ok:   boolean;
    data: Data;
}

export interface Data {
    usuario: UsuarioClass;
}

export interface UsuarioClass {
    id_usuario:          number;
    userid:              string;
    nombre:              string;
    primer_ap:           string;
    email_institucional: string;
    telefono:            string;
    fecha_nac:           Date;
    archivado:           number;
    segundo_ap:          string;
    sexo:                string;
    ci:                  string;
    fecha_registro:      Date;
    usuario_registro:    string;
}
