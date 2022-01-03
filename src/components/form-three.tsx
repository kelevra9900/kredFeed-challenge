import { useContext, useState, useCallback } from 'react';
import { FormContext } from 'context/FormContext';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { Fade } from 'react-awesome-reveal';
import { Input, Form, Row, Col, Button, Tooltip, Space } from 'antd';

const { Item } = Form;

const FormThree = ({ handleBack, handleNext }: any) => {
    const formContext = useContext(FormContext);
    const [loading, setLoading] = useState<boolean>(false);
    const [fileList, setFileList] = useState([]);
    
    const handleChange = ({ fileList }: any) => setFileList(fileList);

    const handleSubmit = useCallback((values) => {
        setLoading(true);
        if (formContext) {
            formContext.setForm({
                ...formContext.form,
                representante_legal: {
                    nombre: values.nombre,
                    genero: values.genero,
                    fecha_nacimiento: values.fecha_nacimiento,
                    entidad_nacimiento: values.entidad_federativa,
                    pais_nacimiento: values.pais_nacimiento,
                    nacionalidad: values.nacionalidad,
                    curp: values.curp,
                    rfc: values.rfc,
                    domicilio: values.domicilio,
                    estado_civil: values.estado_civil,
                    correo: values.correo,
                    telefono: values.telefono,
                    documento_identificacion: values.documento_identificacion
                }
            })
            setLoading(false);
            handleNext(+1);
        }
    },[]);


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
                                }
                            ]} hasFeedback>
                                <Input placeholder='Domicilio' />
                            </Item>

                            <Item label="Teléfono" name="telefono" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Ingresa el teléfono' />
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
                                }
                            ]} hasFeedback>
                                <Input placeholder='México' />
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
                            <Item label="Entidad federativa de nacimiento" name="entidad_federativa_nacimiento" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Entidad federativa de nacimiento' />
                            </Item>
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
                                }
                            ]} hasFeedback>
                                <Input placeholder='Ingresa tu rfc' />
                            </Item>

                            <Item label="Correo electrónico" name="correo" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
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
                                <Button type="primary" size='large' loading={loading} htmlType='submit'>Siguiente</Button>
                            </Tooltip>
                        </Space>
                    </Row>
                </div>
            </Fade>
        </Form>
    );
}

export default FormThree;