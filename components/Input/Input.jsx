import * as S from './Input.styles';
const Input = ({placeHolder, tipo}) => {
    return<S.Input type={tipo} placeholder={placeHolder}  />
}

export default Input;