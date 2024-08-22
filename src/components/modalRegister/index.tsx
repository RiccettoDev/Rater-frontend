import { useState } from "react";
import { ModalContainer, ModalContent, CloseButton, Title, SubTitle, Label, FormContainer, Input, ConfirmeButton, SubTitleBotton } from "./modal-register-styles";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface ModalProps {
  closeModalRegister: () => void
}

export function ModalRegister({ closeModalRegister }: ModalProps) {
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/esconder senha

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={closeModalRegister}>X</CloseButton>
        <Title>Crie sua conta</Title>
        <SubTitle>Insira seus dados para completar o cadastro.</SubTitle>
        <FormContainer>
          <Label>Nome completo<span style={{ color: 'red' }}>*</span></Label>
        </FormContainer>
        <Input placeholder="Digite seu nome" />
        <FormContainer>
          <Label>E-mail<span style={{ color: 'red' }}>*</span></Label>
        </FormContainer>
        <Input placeholder="Digite seu e-mail" />
        <FormContainer>
          <Label>Senha<span style={{ color: 'red' }}>*</span></Label>
        </FormContainer>
        <div style={{ position: 'relative', width: '100%', marginRight: '2em' }}>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Digite sua senha"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {showPassword ? <FaRegEyeSlash size={20} style={{ marginBottom: '0.5em' }} /> : <FaRegEye size={20} style={{ marginBottom: '0.5em' }} />}
          </span>
        </div>
        <FormContainer>
          <Label>Confirmar senha<span style={{ color: 'red' }}>*</span></Label>
        </FormContainer>
        <div style={{ position: 'relative', width: '100%', marginRight: '2em' }}>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirme sua senha"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {showPassword ? <FaRegEyeSlash size={20} style={{ marginBottom: '0.5em' }} /> : <FaRegEye size={20} style={{ marginBottom: '0.5em' }} />}
          </span>
        </div>
        <ConfirmeButton>Cadastrar</ConfirmeButton>
        <SubTitleBotton>Já tem uma conta? <button onClick={closeModalRegister} style={{ border: 'none', background: 'none', cursor: 'pointer' }}><span style={{ color: '#FFFFFF' }}>Fazer login</span></button></SubTitleBotton>
      </ModalContent>
    </ModalContainer>
  );
}
