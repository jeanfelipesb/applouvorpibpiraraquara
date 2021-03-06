import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const Container = styled.ScrollView``;

export const UserNameText = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.primary};
`;
