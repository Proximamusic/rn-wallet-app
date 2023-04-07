import { FunctionComponent } from "react"
import { StatusBar } from "react-native"
import styled from "styled-components/native";
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import TopBackground from "../assets/bgs/background_v1.png";
import BigText from "../components/texts/BigText";
import RegularText from "../components/texts/RegularText";
import RegularButton from "../components/buttons/RegularButton";




const WelcomeContainer = styled(Container)`
background-color: ${colors.secondary};
justify-content: space-between;
width: 100%;
height: 100%;
`
const TopSection = styled.View`
    width: 100%;
    flex: 1;
    max-height: 55%;
`
const BottomSection = styled.View`
    width: 100%;
    flex: 1;
    padding: 25px;
    justify-content: flex-end;
`
const TopImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
`

const Welcome: FunctionComponent = () =>{
  return <>
    <StatusBar barStyle={"light-content"}/>
   <WelcomeContainer>
    <TopSection>
        <TopImage source={TopBackground}/>
    </TopSection>
    <BottomSection>
        <BigText textStyles={{maxWidth: "75%", marginBottom: 25}}>
            Your Personal Bank In your Pocket
        </BigText>
        <RegularText textStyles={{maxWidth: "75%", marginBottom: 25}}>
            No more hassle for money transfer, we've got you covered!
        </RegularText>
        <RegularButton />
    </BottomSection>
   </WelcomeContainer>
  </>
}

export default Welcome