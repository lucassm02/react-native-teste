import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #fff;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
    flex: 1;
    height: 40px;
    padding: 0 15px;
    border-radius: 4px;
    background: #eee;
    border: 1px solid #eee;
`;
export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #7159c1;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 12px;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
`;
export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background-color: #eee;
`;
export const Name = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top: 5px;
    text-align: center;
`;
export const Bio = styled.Text.attrs({
    numberOfLines: 2,
})`
    font-size: 12px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
    text-align: center;
`;
export const ProfileButton = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    height: 36px;
    background-color: #7159c1;
`;
export const ProfileButtonText = styled.Text`
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
`;
