import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { TextProps } from "./types";

const StyledText = styled.Text`
color: ${colors.gray};
font-size: 15px;
text-align: left;
font-family: lato-bold;
`

const RegularText: FunctionComponent<TextProps> = (props)=>{
    return <StyledText style={props.textStyles} >{props.children}</StyledText>
    
}

export default RegularText;