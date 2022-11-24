import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Login: undefined
    Signup: undefined
    PasswordReset: undefined
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;