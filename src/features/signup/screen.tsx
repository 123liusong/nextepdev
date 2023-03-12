/*
 * @Author: liusong 2227616052@qq.com
 * @Date: 2023-03-12 11:29:27
 * @LastEditors: liusong 2227616052@qq.com
 * @LastEditTime: 2023-03-12 11:36:16
 * @FilePath: \nextepdev\src\features\signup\screen.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */



import { useRouter } from 'solito/router'
import { YStack } from 'tamagui'
import { SignUpSignInComponent } from '../../components/SignInSignUp'

export function SignUpScreen() {
  const { push } = useRouter()

  const handleEmailSignInWithPress = async (emailAddress, password) => {
    // await signup.create({
    //   identifier: emailAddress,
    //   password,
    // })
    //
    await redirectIfSignedIn()
  }
  const redirectIfSignedIn = async () => {
    // if (signup.status == 'complete') {
    //   push('/')如果登录，跳转到首页
    alert('500：服务器异常')
    push('/signin')
    // push('/user/2')
    // }
  }
  return (
    <YStack f={1} jc="center" ai="center" space>
      <SignUpSignInComponent type="sign-up" handleEmailWithPress={handleEmailSignInWithPress} />
    </YStack>
  )
}
