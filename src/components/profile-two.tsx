import { useContext } from 'react';
import { FormContext } from 'context/FormContext';
import { Fade } from 'react-awesome-reveal';
import { Input, Form, Row, Col, Divider } from 'antd';

const { Item } = Form;

export default function ProfileTwo() {
    const formData = useContext(FormContext);

    return (
        <Form layout='vertical' autoComplete='false'>
            <Fade>
                <div className="form-row">
                    <Divider orientation="left">Dirección</Divider>
                    <Row gutter={12}>
                        <Col span={8} xs={24} xl={8}>
                            <Item label="Calle o avenida">
                                <Input placeholder='Calle' defaultValue={formData?.form?.domicilio?.calle}/>
                            </Item>

                            <Item label="Código postal" name="cp" >
                                <Input placeholder='Código postal' defaultValue={formData?.form?.domicilio?.cp} />
                            </Item>
                            <Item label="Entidad Federativa o Estado" name="estado">
                                <Input placeholder='Entidad federativa o Estado' defaultValue={formData?.form?.domicilio?.estado}/>
                            </Item>
                        </Col>
                        <Col span={8} xs={24} xl={8}>
                            <Item label="No. Interior" name="no_interior">
                                <Input placeholder='No. Interior' defaultValue={formData?.form?.domicilio?.no_interior}/>
                            </Item>

                            <Item label="Colonia o Urbanización" name="colonia">
                                <Input placeholder='Colonia o Urbanización' defaultValue={formData?.form?.domicilio?.colonia}/>
                            </Item>
                            <Item label="País" name="pais">
                                <Input placeholder='México' />
                            </Item>
                        </Col>
                        <Col span={8} xs={24} xl={8}>
                            <Item label="No. Exterior" name="no_exterior">
                                <Input placeholder='No. Exterior' defaultValue={formData?.form?.domicilio?.no_exterior}/>
                            </Item>
                            <Item label="Ciudad o población" name="ciudad">
                                <Input placeholder='Ciudad de México' defaultValue={formData?.form?.domicilio?.ciudad}/>
                            </Item>

                            {/* <Item label="Comprobante de domicilio" name="comprobante de domicilio" style={{textAlign: 'center'}}>
                                <Upload
                                    listType="picture-card"
                                    onChange={handleChange}
                                    fileList={fileList}
                                >
                                    {fileList.length >= 8 ? null : uploadButton}
                                </Upload>
                            </Item> */}
                        </Col>
                    </Row>
                </div>
            </Fade>
        </Form>
    )
}
