import { Domicilio } from './domicilio';
import { Representante_Legal } from './representante_legal';


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
    representante_legal?: Representante_Legal
}