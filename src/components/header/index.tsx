import logo from '../../../public/logo.png';
import { Search as SearchIcon, SlidersHorizontal } from 'lucide-react';
import {
  HeaderContainer,
  SearchContainer,
  SectionContainer,
  SearchButton,
  Search,
  LoginButton,
  CloseButton,
  ModalContainer,
  ModalContent,
  Title,
  SubTitle,
  SubContainer,
  Input,
  Label,
  LoginButton2
} from './header-styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado do modal
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/esconder senha

  const handleRatingClick = () => {
    setIsModalOpen(true); // Abre o modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <HeaderContainer>
      <Link to={`/`}>
        <img src={logo} alt="logo" />
      </Link>
      <SearchContainer>
        <SectionContainer>
          <SearchButton>
            <SearchIcon size={20} />
          </SearchButton>
          <Search type="text" placeholder="Pesquisar..." />
        </SectionContainer>
        <SearchButton>
          <SlidersHorizontal size={20} />
        </SearchButton>
      </SearchContainer>
      <LoginButton onClick={handleRatingClick}>Login</LoginButton>
      {isModalOpen && (
        <ModalContainer>
          <ModalContent>
            <CloseButton onClick={closeModal}>X</CloseButton>
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
              <span style={{ color: '#FFFFFF' }}>Criar conta</span>
            </SubTitle>
          </ModalContent>
        </ModalContainer>
      )}
    </HeaderContainer>
  );
}
