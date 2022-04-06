import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import styled from 'styled-components'
import { selectCars } from '../features/car/carSlice'

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false)

  const cars = useSelector(selectCars)

  return (
    <Container>
      <a href="/" >
        <img className="logo" src="/images/logo.svg" alt="Logo" />
      </a>
      <Menu>
        {
          cars && cars.map((car, index) => 
            <a key={index} href="/">{car}</a>
          )
        }
      </Menu>
      <RightMenu>
        <a href="/">Shop</a>
        <a href="/">Account</a>
        <MenuBtn onClick={() => setBurgerStatus(true)}>Menu</MenuBtn>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}/>
        </CloseWrapper>
        <li><a href="/">Existing Inventory</a></li>
        <li><a href="/">Used Inventory</a></li>
        <li><a href="/">Trade-In</a></li>
        <li><a href="/">Test Drive</a></li>
        <li><a href="/">Cybertruck</a></li>
        <li><a href="/">Roadstart</a></li>
        <li><a href="/">Semi</a></li>
        <li><a href="/">Charging</a></li>
        <li><a href="/">Powerwall</a></li>
        <li><a href="/">Commercial Energy</a></li>
        <li><a href="/">Utilities</a></li>
        <li><a href="/">Find Us</a></li>
        <li><a href="/">Support</a></li>
        <li><a href="/">Investor Relations</a></li>
        <li><a href="/">United States</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  .logo {
    height: 17px;
    width: 150px;
    padding-left: 30px;
  }
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: no-wrap;
    text-decoration: none;
    font-size: 14px;
    &:hover {
      background-color: #00000010;
      padding: 8px 10px;
      border-radius: 10px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    padding: 8px 10px;
    text-decoration: none;
    font-size: 14px;
    &:hover {
      background-color: #00000010;
      border-radius: 10px;
    }
  }
`

const MenuBtn = styled.div`
  font-weight: 600;
  padding: 8px 10px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #00000010;
    border-radius: 10px;
  }
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #ffffff;
  width: 300px;
  z-index: 16;
  list-style-type: none;
  padding: 20px 20px 20px 40px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${({show}) => show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    a {
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
    }
  }
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`