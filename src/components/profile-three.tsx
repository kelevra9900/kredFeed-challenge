import { useContext } from 'react';
import { FormContext } from 'context/FormContext';
import { Fade } from 'react-awesome-reveal';
import { Input, Form, Row, Col, Divider } from 'antd';
const { Item } = Form;


export default function ProfileThree() {
    const formData = useContext(FormContext);
    return (
        <Form layout='vertical' autoComplete='false'>
            <Fade>
                <div className="form-row">
                    <Divider orientation="left">Representante legal</Divider>
                    <Row gutter={12}>
                        <Col span={8} xs={24} xl={8}>
                            <Item label="Nombre" name="genero">
                                <Input placeholder='Nombre' defaultValue={formData?.form?.representante_legal?.nombre}/>
                            </Item>

                            <Item label="Género" name="genero" >
                                <Input placeholder='Género' defaultValue={formData?.form?.representante_legal?.genero} />
                            </Item>
                            <Item label="Nacionalidad" name="nacionalidad">
                                <Input placeholder='Nacionalidad' defaultValue={formData?.form?.representante_legal?.nacionalidad}/>
                            </Item>
                            <Item label="Teléfono" name="telefono">
                                <Input placeholder='Teléfono' defaultValue={formData?.form?.representante_legal?.telefono}/>
                            </Item>
                            <Item label="Estado civil" name="estado_civil">
                                <Input placeholder='Estado civil' defaultValue={formData?.form?.representante_legal?.estado_civil}/>
                            </Item>
                            <Item label="CLABE" name="clabe">
                                <Input placeholder='CLABE' defaultValue={formData?.form?.representante_legal?.clabe}/>
                            </Item>
                        </Col>
                        <Col span={8} xs={24} xl={8}>
                            <Item label="Fecha de nacimiento" name="fecha_nacimiento">
                                <Input placeholder='No. Interior' defaultValue={formData?.form?.representante_legal?.fecha_nacimiento?.toString()}/>
                            </Item>

                            <Item label="Entidad federativa" name="entidad_federativa">
                                <Input placeholder='Entidad federativa' defaultValue={formData?.form?.representante_legal?.entidad_federativa_nacimiento}/>
                            </Item>
                            <Item label="País de nacimiento" name="pais">
                                <Input placeholder='México' defaultValue={formData?.form?.representante_legal?.pais_nacimiento} />
                            </Item>
                            <Item label="CURP" name="curp">
                                <Input placeholder='México' defaultValue={formData?.form?.representante_legal?.curp} />
                            </Item>
                            <Item label="Correo" name="correo">
                                <Input placeholder='usuario@gmail.com' defaultValue={formData?.form?.representante_legal?.correo} />
                            </Item>
                            <Item label="Banco" name="banco">
                                <Input placeholder='Banamex' defaultValue={formData?.form?.representante_legal?.banco} />
                            </Item>
                        </Col>
                        <Col span={8} xs={24} xl={8}>
                            <Item label="No. Exterior" name="no_exterior">
                                <Input placeholder='No. Exterior' defaultValue={formData?.form?.domicilio?.no_exterior}/>
                            </Item>
                            <Item label="Domicilio" name="domicilio">
                                <Input placeholder='Nacionalidad' defaultValue={formData?.form?.representante_legal?.domicilio}/>
                            </Item>
                            <Item label="Ciudad o población" name="ciudad">
                                <Input placeholder='Ciudad de México' defaultValue={formData?.form?.domicilio?.ciudad}/>
                            </Item>
                            <Item label="RFC" name="rfc">
                                <Input placeholder='RFC' defaultValue={formData?.form?.representante_legal?.rfc}/>
                            </Item>
                            <Item label="Teléfono" name="telefono">
                                <Input placeholder='+52 000000' defaultValue={formData?.form?.representante_legal?.telefono}/>
                            </Item>
                        </Col>
                    </Row>
                </div>
            </Fade>
        </Form>
    )
}
