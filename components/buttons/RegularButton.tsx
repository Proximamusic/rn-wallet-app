import {FunctionComponent} from "react"
import styled from "styled-components/native"
import { colors } from "../colors"
import RegularText from "../texts/RegularText"


const ButtonView = styled.TouchableOpacity`
    align-items: center;
    background-color: ${colors.primary};
    width: 100%;
    padding: 20px;
    border-radius: 20px;
`

const RegularButton : FunctionComponent = ()=>{
  return <ButtonView>
    <RegularText textStyles={{color: "white"}}>
        Get Started
    </RegularText>
  </ButtonView>
}

export default RegularButton;