import { useContext, useState } from 'react';
import { Input, Form, Row, Col, Button, Tooltip, Space } from 'antd';
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Fade } from 'react-awesome-reveal';

import { FormContext } from 'context/FormContext';
import { Domicilio } from 'interfaces/domicilio';

const { Item } = Form;

const FormTwo = ({ handleNext, handleBack }: any) => {
    const formContext = useContext(FormContext);
    const [loading, setLoading] = useState<boolean>(false);

    function saveForm(values: Domicilio) {
        setLoading(true);
        if (formContext) {
            formContext.setForm({
                ...formContext.form, domicilio: {
                    calle: values.calle,
                    colonia: values.colonia,
                    no_interior: values.no_interior,
                    no_exterior: values.no_exterior,
                    ciudad: values.ciudad,
                    estado: values.estado
                }
            })
            setLoading(false);
            handleNext(+1);
        }
    }
    return (
        <Form layout='vertical' autoComplete={'false'} onFinish={(values) => saveForm(values)}>
            <Fade>
                <div className="form-row">
                    <Row gutter={12}>
                        <Col span={8} xs={24} xl={8}>
                            <Item label="Calle" name="calle" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Calle' />
                            </Item>
                            <Item label="Colonia" name="colonia" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Colonia' />
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
                            <Item label="Ciudad" name="ciudad" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Guadalajara' />
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
                            <Item label="Estado" name="estado" rules={[
                                {
                                    required: true,
                                    message: 'El campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder='Jalisco' />
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

export default FormTwo;