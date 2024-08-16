import { Clapperboard } from "lucide-react"
import { Container, SubContainer, Description, Login } from "./movies-watched"
import { LoginModal } from "../modalLogin";
import { useState } from "react";
import { ModalRegister } from "../modalRegister";

export function MoviesWatched() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado do modal de login
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/esconder senha
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false); // Estado do formulário de registro

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
    <Container>
      <h3>| Filmes Assitidos</h3>
      <SubContainer>
        <Clapperboard size={48} />
        <Description>Ops, nenhum filme avaliado ainda. </Description>
        <Description>Que tal adicionar um</Description>
        <Login onClick={handleRatingClick}>Fazer login</Login>
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
      </SubContainer>
    </Container>
  )
}