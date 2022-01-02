import { useState, useContext } from 'react';
import { Layout, Row, Col, Steps } from 'antd';
import { Fade } from 'react-awesome-reveal';
import { FormContext } from 'context/FormContext';

import FormOne from 'components/form-one';
import FormTwo from 'components/form-two';
import FormThree from 'components/form-three';

const { Content } = Layout;
const { Step } = Steps;

function FormView() {
  const [view, setView] = useState<number>(0);
  const form = useContext(FormContext);

  const onChange = (current: number) => {
    setView(current);
  }

  
  const handleNext = () => {
    setView((prevActiveStep:number) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setView((prevActiveStep:number) => prevActiveStep - 1);
  };

  const steps = [
    {
      title: 'Usuario',
      content: <FormOne handleBack={handleBack} handleNext={handleNext} />
    },
    {
      title: 'Dirección',
      content: <FormTwo handleBack={handleBack} handleNext={handleNext} />
    },
    {
      title: 'Tercero',
      content: <FormThree handleBack={handleBack} handleNext={handleNext} />
    }
  ];


  return (
    <main>

      <div className="page-content">
        <Layout>
          <Fade triggerOnce>
            <Content className='home-content'>
              <Row>
                <Col flex={2} xl={10} sm={0}>
                  <div style={{ backgroundImage: `url('./images/background.png')`, height: '95%', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderTopLeftRadius: '9px', borderBottomLeftRadius: '9px' }} />
                </Col>
                <Col flex={3} xl={17} sm={24}>
                  <Steps size="small" current={view} onChange={onChange} className="site-navigation-steps">
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
      </div>
    </main>
  );
}

export default FormView;