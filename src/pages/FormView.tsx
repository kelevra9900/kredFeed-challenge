import React, { useState } from 'react';
import { Layout, Row, Col, Steps } from 'antd';
import { Fade } from 'react-awesome-reveal';
import FormOne from 'components/form-one';
import FormTwo from 'components/form-two';
import FormThree from 'components/form-three';
import FormFour from 'components/form-four';

const { Content } = Layout;
const { Step } = Steps;

const FormView: React.FunctionComponent = () => {
  const [view, setView] = useState<number>(0);

  const handleNext = () => {
    setView((prevActiveStep: number) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setView((prevActiveStep: number) => prevActiveStep - 1);
  };

  const steps = [
    {
      title: 'Datos Generales',
      content: <FormOne handleBack={handleBack} handleNext={handleNext} />
    },
    {
      title: 'Dirección',
      content: <FormTwo handleBack={handleBack} handleNext={handleNext} />
    },
    {
      title: 'Representante legal',
      content: <FormThree handleBack={handleBack} handleNext={handleNext} />
    },
    {
      title: 'Listo',
      content: <FormFour handleBack={handleBack} handleNext={handleNext} />
    }
  ];

  return (
    <Layout>
      <Fade triggerOnce>
        <Content className='home-content'>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col flex="450px">
              <div style={{ backgroundImage: `url('./images/background.png')`, height: '100%', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderTopLeftRadius: '9px', borderBottomLeftRadius: '9px' }} />
            </Col>
            <Col flex="auto" xl={17} sm={24}>
              <Steps size="small" current={view} className="site-navigation-steps">
                {
                  steps.map(item => (
                    <Step key={item.title} title={item.title} />
                  ))
                }
              </Steps>
              <div className="steps-content">
                {steps[view].content}
              </div>
            </Col>
          </Row>
        </Content>
      </Fade>
    </Layout>
  );
}

export default FormView;