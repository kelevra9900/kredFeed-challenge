import { Domicilio } from './domicilio';


export interface GlobalForm {
    id?: string,
    completed?: boolean,
    razon_social?: string,
    nombre_comercial?: string,
    nacionalidad?: string,
    fecha_constitucion?: string,
    rfc?: string,
    regimen_fiscal?: string,
    industria?: string,
    domicilio?: Domicilio,
    telefono?: string,
    correo?: string,
}