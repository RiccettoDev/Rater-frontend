import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../public/logo.png';
import { Search as SearchIcon, SlidersHorizontal } from 'lucide-react';
import {
  HeaderContainer,
  SearchContainer,
  SectionContainer,
  SearchButton,
  Search,
  LoginButton,
} from './header-styles';
import { ModalRegister } from '../modalRegister';
import { LoginModal } from '../modalLogin'; // Importar o componente LoginModal

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado do modal de login
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/esconder senha
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false); // Estado do formulário de registro
  const [query, setQuery] = useState(''); // Estado da consulta de pesquisa
  const navigate = useNavigate(); // Hook para navegação programática

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/movies?query=${encodeURIComponent(query)}`); // Redireciona para /movies com a query
    }
  };

  const handleRatingClick = () => {
    setIsModalOpen(true); // Abre o modal de login
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal de login
  };

  const handleRegisterOpen = () => {
    setIsModalRegisterOpen(true); // Abre o modal de registro
  };

  const closeModalRegister = () => {
    setIsModalRegisterOpen(false); // Fecha o modal de registro
  };

  return (
    <HeaderContainer>
      <Link to={`/`}>
        <img src={logo} alt="logo" />
      </Link>
      <SearchContainer>
        <SectionContainer>
          <SearchButton onClick={handleSearch}>
            <SearchIcon size={20} />
          </SearchButton>
          <Search
            type="text"
            placeholder="Pesquisar..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </SectionContainer>
        <SearchButton>
          <SlidersHorizontal size={20} />
        </SearchButton>
      </SearchContainer>
      <LoginButton onClick={handleRatingClick}>Login</LoginButton>

      <LoginModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onRegisterOpen={handleRegisterOpen}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />

      {isModalRegisterOpen && (
        <ModalRegister closeModalRegister={closeModalRegister} />
      )}
    </HeaderContainer>
  );
}
