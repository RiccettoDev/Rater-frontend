import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  Title,
  SubTitle,
  SubContainer,
  Input,
  Label,
  LoginButton2
} from './modal-login-styles';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterOpen: () => void;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
}

export function LoginModal({ isOpen, onClose, onRegisterOpen, showPassword, setShowPassword }: LoginModalProps) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Title>Acesse sua conta</Title>
        <SubTitle>Bem vindo de volta! Entre com seus dados.</SubTitle>
        <SubContainer>
          <Label>
            E-mail<span style={{ color: 'red' }}>*</span>
          </Label>
          <Input type="email" placeholder="Digite seu e-mail" />
          <Label>
            Senha<span style={{ color: 'red' }}>*</span>
          </Label>
          <div style={{ position: 'relative' }}>
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
        </SubContainer>
        <LoginButton2>Fazer Login</LoginButton2>
        <SubTitle>
          Não tem uma conta ainda?{' '}
          <button onClick={onRegisterOpen} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
            <span style={{ color: '#FFFFFF' }}>Criar conta</span>
          </button>
        </SubTitle>
      </ModalContent>
    </ModalContainer>
  );
}
