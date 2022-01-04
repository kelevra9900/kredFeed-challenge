import { useContext, useState, memo, useCallback } from 'react';
import { Input, Form, Row, Col, DatePicker, Button, Tooltip, message, Space, Select, Divider } from 'antd';
import { Fade } from 'react-awesome-reveal';

import { FormContext } from 'context/FormContext';
const { Item } = Form;
const { Option } = Select;

const FormOne = ({ handleNext }: any) => {
    const formContext = useContext(FormContext);
    const [regimenFiscal, setRegimeFiscal] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false);
    const rfcRegex = /^[ña-z]{3,4}[0-9]{6}[0-9a-z]{3}$/i;


    const savedForm = useCallback((values) => {
        setLoading(true);
        const rfc = values.rfc;
        if (rfcRegex.test(rfc)) {
            if (formContext) {
                formContext.setForm({
                    razon_social: values.razon_social,
                    nombre_comercial: values.nombre_comercial,
                    nacionalidad: values.nacionalidad,
                    fecha_constitucion: values.fecha_constitucion,
                    rfc: values.rfc,
                    regimen_fiscal: regimenFiscal,
                    industria: values.industria,
                    correo: values.correo,
                });
                setLoading(false);
                handleNext(+1);
            }
        } else {
            message.warning('Por favor ingresa un RFC válido');
            setLoading(false);
        }
    }, [])


    const onChange = useCallback((values) => {
        setRegimeFiscal(values);
    },[])



    const onSearch = useCallback((values) => {
        console.info(values);
    },[])

    return (
        <Form layout="vertical" autoComplete='false' onFinish={(values) => savedForm(values)} data-testid="form-one" >
            <Fade>
                <div className='form-row'>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col span={6} xs={24} sm={24} xl={8} md={8}>
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
                            <Item label="Nacionalidad" name="nacionalidad" rules={[
                                {
                                    required: true,
                                    message: 'Este campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder="Mexicana" />
                            </Item>
                        </Col>

                        <Col span={6} xs={24} sm={24} xl={8} md={8}>
                            <Item label="Fecha de constitución" name="fecha_constitucion" rules={[
                                {
                                    required: true,
                                    message: 'Este campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <DatePicker placeholder="Ingresa la razón social" style={{ width: '100%' }} />
                            </Item>
                            <Item label="RFC" name="rfc" hasFeedback normalize={value => (value || '').toUpperCase()}
                                rules={[
                                    {
                                        required: true,
                                        message: 'El RFC es un campo obligatorio'
                                    }
                                ]}>
                                <Input placeholder="Ingresa la razón social" />
                            </Item>
                            <Item label="Industria" name="industria" rules={[
                                {
                                    required: true,
                                    message: 'Este campo es obligatorio'
                                }
                            ]} hasFeedback>
                                <Input placeholder="Industria" />
                            </Item>
                        </Col>

                        <Col span={6} xs={24} sm={24} xl={8} md={8}>
                            <Item label="Régimen fiscal" aria-label="regimen_fiscal" aria-selected="regimen_fiscal" name="regimen_fiscal" rules={[
                                {
                                    required: true,
                                    message: 'El régimen fiscal es obligatorio'
                                }
                            ]}>
                                <Select
                                    showSearch
                                    placeholder="Selecciona un régimen fiscal"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={(input: string, option: any) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="incorporacion-fiscal">Incorporación fiscal</Option>
                                    <Option value="actividades-empresariales">Actividades empresariales</Option>
                                    <Option value="arrendamiento-de-inmuebles">Arrendamiento de inmuebles</Option>
                                    <Option value="servisios-profesionales">Servicios profesionales</Option>
                                    <Option value="asalariado">Asalariado</Option>
                                </Select>
                            </Item>

                            <Item label="Correo" name="correo" rules={[
                                {
                                    required: true,
                                    message: 'Este campo es obligatorio'
                                },
                                {
                                    type: 'email',
                                    message: 'Ingresa un email válido!',
                                  },
                            ]} hasFeedback>
                                <Input placeholder="Ingresa el correo electrónico" />
                            </Item>
                        </Col>
                    </Row>
                    <Space direction="horizontal" size={24}>
                        <Tooltip title="Siguiente" placement='top' arrowPointAtCenter>
                            <Button type="primary" size='large' loading={loading} htmlType='submit'>Siguiente</Button>
                        </Tooltip>

                    </Space>
                </div>
            </Fade>
        </Form>
    );
}

export default memo(FormOne);
