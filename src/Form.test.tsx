import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import FormView from 'pages/FormView';
import 'intersection-observer';
import FormOne from 'components/form-one';

describe('When the form is mounted', () => {
  // First render scoupe
  it('there must be a create form', ()=>{
    render(<FormView />)
    expect(screen.queryByText(/Datos Generales/i)).toBeInTheDocument();
  });
  // Input scoupe
  it('There must be adding input', () => {
    render(<FormOne />);
    expect(screen.getByLabelText(/Razon social/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Nombre comercial/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Nacionalidad/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Fecha de constitución/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/RFC/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Industria/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Régimen fiscal/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Correo/i)).toBeInTheDocument()
  });

  //Scope submit button
  it('Should exists the submit button', () => {
    render(<FormOne />);
    expect(screen.getByRole('button', { name: /Siguiente/i})).toBeInTheDocument()
  });
});

describe("When the user submit the form without values", () => {
  it('Should display validation message', () => {
    render(<FormOne />)
    waitFor(() => expect(screen.queryByText(/Este campo es obligatorio/i)).not.toBeInTheDocument());
    fireEvent.click(screen.getByRole('button', {name: /Siguiente/i}));
    waitFor(() => expect(screen.queryByText(/Este campo es obligatorio/i)).toBeInTheDocument());
  });
});