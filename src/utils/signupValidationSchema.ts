import * as yup from 'yup'

export const schema = yup.object({
  id: yup.string().required('아이디를 입력 해주세요.').max(15, '아이디는 최대 15자리 입니다.'),
  email: yup.string().required('이메일을 입력 해주세요.').email('이메일 형식이 적합하지 않습니다.'),
  nickName: yup.string().required('닉네임을 입력 해주세요.').max(10, '닉네임은 최대 10자리 입니다.'),
  password: yup
    .string()
    .required('비밀번호를 입력 해주세요.')
    .min(8, '비밀번호는 최소 8자리 이상 입니다.')
    .max(15, '비밀번호는 최대 15자리 입니다.')
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/, '영문, 숫자 조합으로 입력 해주세요.'),
  confirmPassword: yup
    .string()
    .required('비밀번호를 다시 입력 해주세요.')
    .min(8, '비밀번호는 최소 8자리 이상 입니다.')
    .max(15, '비밀번호는 최대 15자리 입니다.')
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/, '영문, 숫자 조합으로 입력 해주세요.')
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.'),
})
