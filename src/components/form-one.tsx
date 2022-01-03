import { useContext, useState } from 'react';
import { Input, Form, Row, Col, DatePicker, Button, Tooltip, message } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Fade } from 'react-awesome-reveal';

import { FormContext } from 'context/FormContext';
const { Item } = Form;

const FormOne = ({ handleNext, handleBack }: any) => {
    const formContext = useContext(FormContext);
    const [loading, setLoading] = useState<boolean>(false);
    const rfcRegex = /^[ña-z]{3,4}[0-9]{6}[0-9a-z]{3}$/i;

    function savedForm(values: any) {
        setLoading(true);
        const rfc = values.rfc;
        if (rfcRegex.test(rfc)) {
            if (formContext) {
                formContext.setForm({
                    id: '1',
                    completed: false,
                    razon_social: values.razon_social,
                    nombre_comercial: values.nombre_comercial,
                    fecha_constitucion: values.fecha_constitucion,
                    rfc: values.rfc,
                    industria: values.industria,
                    regimen_fiscal: values.regimen_fiscal
                });
                setLoading(false);
                handleNext(+1);
            }
        } else {
            message.warning('Por favor ingresa un RFC válido');
            setLoading(false);
        }
    }


    return (
        <Form layout="vertical" autoComplete='false' onFinish={(values) => savedForm(values)} data-testid="form-one" >
            <Fade>
                <div className='form-row'>
                    <Row gutter={12}>
                        <Col span={8}>
                            <Item label="Razon social" name="razon_social" rules={[
                                {
                                    required: true,
                                    message: 'Este campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder="Ingresa la razón social" />
                            </Item>
                            <Item label="Nombre comercial" name="nombre_comercial" rules={[
                                {
                                    required: true,
                                    message: 'Este campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder="Ingresa la razón social" />
                            </Item>
                        </Col>

                        <Col span={8}>
                            <Item label="Fecha de constitución" name="fecha_constitucion" rules={[
                                {
                                    required: true,
                                    message: 'Este campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <DatePicker placeholder="Ingresa la razón social" style={{ width: '100%' }} />
                            </Item>
                            <Item label="RFC" name="rfc" hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'El RFC es un campo obligatorio'
                                    }
                                ]}>
                                <Input placeholder="Ingresa la razón social" />
                            </Item>
                        </Col>

                        <Col span={8}>
                            <Item label="Industria" name="industria" rules={[
                                {
                                    required: true,
                                    message: 'Este campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder="Ingresa la razón social" />
                            </Item>

                            <Item label="Regimen Fiscal" name="regimen_fiscal" rules={[
                                {
                                    required: true,
                                    message: 'Este campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder="Ingresa la razón social" />
                            </Item>
                        </Col>


                        <Tooltip title="Siguiente" placement='top' arrowPointAtCenter>
                            <Button type="primary" shape="circle" loading={loading} size='large' icon={<ArrowRightOutlined />} htmlType='submit' />
                        </Tooltip>

                    </Row>
                </div>
            </Fade>
        </Form>
    );
}

export default FormOne;
