import { Link } from 'react-router-dom';
import {
  ModalContainer,
  CloseButton,
  SubContainer,
  Title,
} from './modal-menu-styles';

interface MenuModalProps {
  isOpen: boolean;
  closeModalMenu: () => void;
}

export function ModalMenu({ isOpen, closeModalMenu }: MenuModalProps) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <CloseButton onClick={closeModalMenu}>X</CloseButton>
      <SubContainer>
        <Link to={'/topmovies'}>
          <Title>Filmes</Title>
        </Link>
        <Title>Celebridades</Title>
      </SubContainer>
    </ModalContainer>
  );
}
