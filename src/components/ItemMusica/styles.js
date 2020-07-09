import styled from 'styled-components/native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const Icon = styled(SimpleLineIcons)`
  color: ${props => props.theme.colors.danger};
  font-size: 26px;
`;

export const Card = styled.View `
  padding: 10px;
  background-color: ${props => props.theme.colors.lighter};
  flex-direction: row;
  justify-content: space-between;
  border-radius: 7px; 
  margin: 5px 15px ;
`;

export const CardBody = styled.View ``;

export const TextBodyError = styled.Text `
  font-size: 18px;
  color: ${props => props.theme.colors.success};
`;  

export const CardRight = styled.View `
  align-items: center;
  flex-direction: row;
`;

export const CardRightTouch = styled.TouchableOpacity``;


