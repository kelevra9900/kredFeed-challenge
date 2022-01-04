import { useContext, useState } from 'react';
import { FormContext } from 'context/FormContext';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { Fade } from 'react-awesome-reveal';
import { Input, Form, Row, Col, Button, Tooltip, Space } from 'antd';
import { addressRegex, curpRegex, phoneRegex, rfcRegex } from 'utils/regex';

const { Item } = Form;

const FormThree = ({ handleBack, handleNext }: any) => {
    const formContext = useContext(FormContext);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = (values:any) => {
        setLoading(true);
        if (formContext) {
            formContext.setForm({
                ...formContext.form,
                representante_legal: {
                    nombre: values.nombre,
                    genero: values.genero,
                    fecha_nacimiento: values.fecha_nacimiento,
                    entidad_federativa_nacimiento: values.entidad_federativa,
                    pais_nacimiento: values.pais_nacimiento,
                    nacionalidad: values.nacionalidad,
                    curp: values.curp,
                    rfc: values.rfc,
                    domicilio: values.domicilio,
                    doc_id: values.doc_id,
                    clabe: values.clabe,
                    banco: values.banco,
                    estado_civil: values.estado_civil,
                    correo: values.correo,
                    telefono: values.telefono
                }
            })
            setLoading(false);
            handleNext(+1);
        }
    };


    return (
        <Form layout='vertical' autoComplete='false' onFinish={(values) => handleSubmit(values)}>
            <Fade>
                <div className="form-row">
                    <Row gutter={12}>
                        <Col span={8} xs={24} xl={8}>
                            <Item label="Nombre" name="nombre" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Roger Torres' />
                            </Item>
                            <Item label="Género" name="genero" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='No binario' />
                            </Item>

                            <Item label="Nacionalidad" name="nacionalidad" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Ingresa tu nacionalidad' />
                            </Item>

                            <Item label="Domicilio" name="domicilio" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }, {
                                    pattern: addressRegex,
                                    message: 'Ingresa un domicilio válido'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Domicilio' />
                            </Item>

                            <Item label="Teléfono" name="telefono" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                },
                                {
                                    pattern: phoneRegex,
                                    message: 'Ingresa un teléfono válido'
                                }
                            ]} hasFeedback>
                                <Input placeholder='+52 000 000' />
                            </Item>
                        </Col>
                        <Col span={8} xs={24} xl={8}>
                            <Item label="Fecha de nacimiento" name="fecha_nacimiento" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Fecha de nacimiento' />
                            </Item>
                            <Item label="Entidad federativa" name="entidad_federativa" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Guadalajara' />
                            </Item>

                            <Item label="CURP" name="curp" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }, {
                                    pattern: curpRegex,
                                    message: 'Ingresa un CURP válido'
                                }
                            ]} hasFeedback>
                                <Input placeholder='CURP' />
                            </Item>

                            <Item label="Estado civil" name="estado_civil" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Ingresa el estado civil' />
                            </Item>

                            <Item label="CLABE" name="clabe" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='CLABE' />
                            </Item>
                        </Col>
                        <Col span={8} xs={24} xl={8}>
                            <Item label="País de nacimiento" name="pais_nacimiento" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='México' />
                            </Item>

                            <Item label="RFC" name="rfc" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }, {
                                    pattern: rfcRegex,
                                    message: 'Ingresa un RFC válido'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Ingresa tu rfc' />
                            </Item>

                            <Item label="Correo electrónico" name="correo" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                },
                                {
                                    type: 'email',
                                    message: 'Ingresa un email válido!',
                                },
                            ]} hasFeedback>
                                <Input placeholder='user@gmail.com' />
                            </Item>
                            <Item label="Banco" name="banco" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Banco' />
                            </Item>
                        </Col>

                        <Space direction="horizontal" size={24}>
                            <Tooltip title="Atrás" placement='top' arrowPointAtCenter>
                                <Button type="link" shape="circle" size='large' loading={loading} icon={<ArrowLeftOutlined />} onClick={handleBack}>Atrás</Button>
                            </Tooltip>

                            <Tooltip title="Siguiente" placement='top' arrowPointAtCenter>
                                <Button type="primary" size='large' loading={loading} htmlType='submit'>Revisa tu perfil</Button>
                            </Tooltip>
                        </Space>
                    </Row>
                </div>
            </Fade>
        </Form>
    );
}

export default FormThree;