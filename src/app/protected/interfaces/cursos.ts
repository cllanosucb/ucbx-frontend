export interface Cursos {
    ok:   boolean;
    data: Datum[];
}

export interface Datum {
    id:                      number;
    name:                    string;
    access_code:             string;
    description:             string;
    syllabus:                null | string;
    style:                   string;
    course_code:             null | string;
    section_code:            null | string;
    credits:                 number | null;
    weighting_style:         string;
    weight_using_categories: boolean;
    display_in_catalog:      boolean;
    catalog_category:        string;
    grademap:                Grademap[];
    grading_periods:         GradingPeriod[];
    language:                string;
    time_zone:               string;
    template:                boolean;
    parent:                  number | null;
    organization:            null | string;
    organization_id:         number | null;
    archived:                boolean;
    picture:                 string;
    categories:              Category[];
    semester:                null | string;
    lo_age:                  string;
    hi_age:                  string;
    subject:                 string;
    start:                   Date;
    finish:                  Date;
    class_times:             any[];
    price:                   number | null;
}

export interface Grademap {
    grade:           string;
    minimum_percent: number;
}

export interface GradingPeriod {
    name:    string;
    percent: number;
    start:   Date;
}

export interface Category {
    name:    string;
    weight?: number | null;
}

export interface CursoAPI {
    id_curso:     number;
    nombre:       string;
    descripcion:  string;
    creditos:     number;
    organizacion: string;
    semestre:     string;
    fecha_inicio: string;
    fecha_fin:    string;
}

export class ConvertData {

    public transformToCursosAPI(lista: Datum[]): CursoAPI[] {
        let cursosApi: CursoAPI[] = [];
        for (let i = 0; i < lista.length; i++) {
            let curso: CursoAPI = {
                id_curso : lista[i].id,
                nombre : lista[i].name,
                descripcion : lista[i].description,
                creditos : lista[i].credits,
                organizacion : lista[i].organization,
                semestre : lista[i].semester,
                fecha_inicio : lista[i].start.toString(),
                fecha_fin : lista[i].finish.toString()
            };
            cursosApi.push(curso);
        }
        return cursosApi;
    }
    
    public transformToIdCursos(lista: Datum[]): number[] {
        let cursos: number[] = [];
        for (let i = 0; i < lista.length; i++) {
            cursos.push(lista[i].id);
        }
        return cursos;
    }

}

