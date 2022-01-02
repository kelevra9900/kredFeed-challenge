export interface Domicilio {
    //calle o avenida
    calle?: string,
    no_exterior?: number,
    no_interior?: number,
    cp?: number,
    // Colonia o población
    colonia?: string,
    // Ciudad o población
    ciudad?: string,
    // Entidad federativa o estado
    estado?: string,
    pais?: string
}