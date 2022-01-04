import { useContext } from 'react';
import { FormContext } from 'context/FormContext';
import { Fade } from 'react-awesome-reveal';
import { Input, Form, Row, Col, Layout, Divider } from 'antd';

const { Content } = Layout;
const { Item } = Form;
export default function ProfileOne() {
    const formData = useContext(FormContext);

    return (
        <Fade>
            <Layout>
                <Content style={{backgroundColor: '#ffff'}}>
                    <Divider orientation="left">Datos generales</Divider>

                    <Form layout='vertical' >
                        <Row gutter={12}>
                            <Col span={8} xs={24} xl={8}>
                                <Item label="Razón social">
                                    <Input placeholder='input' defaultValue={formData?.form?.razon_social} />
                                </Item>
                                <Item label="Nombre Comercial">
                                    <Input placeholder='input' defaultValue={formData?.form?.nombre_comercial} />
                                </Item>
                                <Item label="Nacionalidad">
                                    <Input placeholder='input' defaultValue={formData?.form?.nacionalidad} />
                                </Item>
                            </Col>
                            
                            <Col span={8} xs={24} xl={8}>
                                <Item label="Fecha de constitución">
                                    <Input placeholder='input' defaultValue={formData?.form?.rfc} />
                                </Item>
                                <Item label="RFC">
                                    <Input placeholder='input' defaultValue={formData?.form?.rfc} />
                                </Item>
                                <Item label="Correo electrónico">
                                    <Input placeholder='input' defaultValue={formData?.form?.correo} />
                                </Item>
                            </Col>

                            <Col span={8} xs={24} xl={8}>
                                <Item label="Industria">
                                    <Input placeholder='input' defaultValue={formData?.form?.industria} />
                                </Item>
                                <Item label="Régimen fiscal">
                                    <Input placeholder='input' defaultValue={formData?.form?.rfc} />
                                </Item>
                                <Item label="Teléfono">
                                    <Input placeholder='input' defaultValue={formData?.form?.telefono} />
                                </Item>
                            </Col>
                        </Row>
                    </Form>
                </Content>
            </Layout>
        </Fade>
    )
}
