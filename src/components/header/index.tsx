import logo from '../../../public/logo.png';
import { Search as SearchIcon, SlidersHorizontal } from 'lucide-react';
import {
  HeaderContainer,
  SearchContainer,
  SectionContainer,
  SearchButton, Search,
  LoginButton
} from './header-styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <SearchContainer>
        <SectionContainer>
          <SearchButton>
            <SearchIcon size={20} />
          </SearchButton>
          <Search type="text" placeholder='Pesquisar...' />
        </SectionContainer>
        <SearchButton>
          <SlidersHorizontal size={20} />
        </SearchButton>
      </SearchContainer>
      <LoginButton>
        Login
      </LoginButton>
    </HeaderContainer>
  )
}