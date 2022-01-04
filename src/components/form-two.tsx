import { useContext, useState, memo } from 'react';
import { Input, Form, Row, Col, Button, Tooltip, Space, Upload } from 'antd';
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons';
import { Fade } from 'react-awesome-reveal';

import { FormContext } from 'context/FormContext';
import { Domicilio } from 'interfaces/domicilio';
import { addressRegex } from 'utils/regex';
const { Item } = Form;


const uploadButton = (
    <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Subir archivo/foto</div>
    </div>
);


const FormTwo = ({ handleNext, handleBack }: any) => {
    const formContext = useContext(FormContext);
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = ({ fileList }: any) => setFileList(fileList);

    function handleSubmit(values: Domicilio) {
        setLoading(true);
        if (formContext) {
            formContext.setForm({
                ...formContext.form, 
                domicilio: {
                    telefono: values.telefono,
                    calle: values.calle,
                    colonia: values.colonia,
                    no_interior: values.no_interior,
                    no_exterior: values.no_exterior,
                    ciudad: values.ciudad,
                    estado: values.estado,
                    cp: values.cp,
                    pais: values.pais
                }
            })
            setLoading(false);
            handleNext(+1);
        } else {
            console.log('formcontext is not mounted', formContext)
        }
    };

    return (
        <Form layout='vertical' autoComplete='false' onFinish={(values) => handleSubmit(values)}>
            <Fade>
                <div className="form-row">
                    <Row gutter={2}>
                        <Col span={8} xs={24} xl={8}>
                            <Item label="Calle o Avenida" name="calle" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                },
                                {
                                    pattern: addressRegex,
                                    message: 'Ingresa una dirección válida'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Calle' />
                            </Item>

                            <Item label="Código postal" name="cp" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                },
                                {
                                    min: 4,
                                    max: 6,
                                    message: 'Ingresa un código postal válido'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Código postal' type={'number'} />
                            </Item>

                            <Item label="Entidad Federativa o Estado" name="estado" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Entidad federativa o Estado' />
                            </Item>

                            <Item label="Correo" name="correo" rules={[
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
                        </Col>
                        <Col span={8} xs={24} xl={8}>
                            <Item label="No. Interior" name="no_interior" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='No. Interior' />
                            </Item>

                            <Item label="Colonia o Urbanización" name="colonia" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Colonia o Urbanización' />
                            </Item>
                            <Item label="País" name="pais" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='México' />
                            </Item>

                            <Item label="Número telefónico" name="telefono" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Número de teléfono' />
                            </Item>
                        </Col>
                        <Col span={8} xs={24} xl={8}>
                            <Item label="No. Exterior" name="no_exterior" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='No. Exterior' />
                            </Item>
                            <Item label="Ciudad o población" name="ciudad" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Ciudad de México' />
                            </Item>

                            <Item label="Comprobante de domicilio" name="comprobante de domicilio" style={{textAlign: 'center'}}>
                                <Upload
                                    listType="picture-card"
                                    onChange={handleChange}
                                    fileList={fileList}
                                >
                                    {fileList.length >= 8 ? null : uploadButton}
                                </Upload>
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

export default memo(FormTwo);