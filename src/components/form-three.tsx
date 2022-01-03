import { useContext } from 'react';
import { FormContext } from 'context/FormContext';

import Lottie from "lottie-react";
import { Fade } from 'react-awesome-reveal';
import doneAnimation from 'lottie/done.json';
import { Descriptions } from 'antd';

const { Item } = Descriptions;

const FormThree = ({handleNext, handleBack}: any) => {
    const form = useContext(FormContext);
    return(
        <div style={{textAlign: 'center'}}>
            <Fade>
                <Lottie animationData={doneAnimation} loop={true} style={{height: 240}}/>
                <Descriptions title="Se ha guardado tu información" layout="horizontal">
                    <Item label="Razón social">
                        {form?.form?.razon_social}
                    </Item>
                    <Item label="Nombre comercial">
                        {form?.form?.nombre_comercial}
                    </Item>
                    <Item label="Nacionalidad">
                        {form?.form?.nacionalidad}
                    </Item>
                    <Item label="Fecha constitución">
                        {form?.form?.telefono}
                    </Item>
                    <Item label="RFC">
                        {form?.form?.rfc}
                    </Item>
                    <Item label="Régimen fiscal">
                        {form?.form?.regimen_fiscal}
                    </Item>
                    <Item label="Industria">
                        {form?.form?.industria}
                    </Item>
                    <Item label="Direccion">
                        {form?.form?.domicilio?.calle} - {form?.form?.domicilio?.no_interior} -{form?.form?.domicilio?.no_exterior} {form?.form?.domicilio?.cp}
                    </Item>
                </Descriptions>
            </Fade>
        </div>
    );
}

export default FormThree;