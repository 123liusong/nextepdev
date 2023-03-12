/*
 * @Author: liusong 2227616052@qq.com
 * @Date: 2023-03-12 11:23:11
 * @LastEditors: liusong 2227616052@qq.com
 * @LastEditTime: 2023-03-12 11:42:34
 * @FilePath: \nextepdev\src\features\signin\screen.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */

import { useRouter } from "solito/router";
import { YStack } from "tamagui";
import { SignUpSignInComponent } from "../../components/SignInSignUp";

export default function SignInScreen() {
    const { push } = useRouter();


  const handleEmailSignInWithPress = async (emailAddress, password) => {
    // await signIn.create({
    //   identifier: emailAddress,
    //   password,
    // })
    //注册成功后跳转到登录
    await redirectIfSignedIn()
  }
  const redirectIfSignedIn = async () => {
    // if (signIn.status == 'complete') {
    //   push('/')如果注册成功，跳转到登录
      push('/home')
    // }
  }
  return (
    <YStack f={1} jc="center" ai="center" space>
      <SignUpSignInComponent type="sign-in" handleEmailWithPress={handleEmailSignInWithPress} />
    </YStack>
  )
}