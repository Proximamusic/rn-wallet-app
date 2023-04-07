import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import { TextProps } from "./types";

const StyledText = styled.Text`
color: ${colors.gray};
font-size: 13px;
text-align: left;
font-family: lato-regular;
`

const SmallText: FunctionComponent<TextProps> = (props)=>{
    return <StyledText style={props.textStyles} >{props.children}</StyledText>
    
}

export default SmallText;