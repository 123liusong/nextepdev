/*
 * @Author: liusong 2227616052@qq.com
 * @Date: 2023-03-12 11:13:34
 * @LastEditors: liusong 2227616052@qq.com
 * @LastEditTime: 2023-03-12 11:37:14
 * @FilePath: \nextepdev\src\components\SignInSignUp.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import { useState } from 'react';
import { Link } from "solito/link";
import { Button, Input, Paragraph, XStack, YStack } from 'tamagui';
type Props = {
  type: 'sign-up' | 'sign-in'
  handleEmailWithPress: (emailAddress: string, password: string) => void
}

export const SignUpSignInComponent: React.FC<Props> = ({ type ,handleEmailWithPress}) => {
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')

  return (
    <YStack
      borderRadius="$10"
      space
      px="$7"
      py="$6"
      w={350}
      shadowColor={'#00000020'}
      shadowRadius={26}
      shadowOffset={{ width: 0, height: 4 }}
      bg="$background"
    >
      {/* email sign up option */}
      <Input
        placeholder="邮箱"
        onChangeText={(text) => {
          setEmailAddress(text)
        }}
      />
      <Input
        placeholder="密码"
        onChangeText={(text) => {
          setPassword(text)
        }}
        textContentType="password"
        secureTextEntry
      />

      {/* sign up button */}
      <Button
        themeInverse
        onPress={() => {
          handleEmailWithPress(emailAddress, password)
        }}
        hoverStyle={{ opacity: 0.8 }}
        onHoverIn={() => {}}
        onHoverOut={() => {}}
        focusStyle={{ scale: 0.975 }}
      >
        {type === 'sign-up' ? '注册' : '登录'}
      </Button>

      {/* or sign in, in small and less opaque font */}
      <XStack>
        <Paragraph size="$2" mr="$2" opacity={0.4}>
          {type === 'sign-up' ? '已经拥有账号？  ' : '还为拥有账号？'}
        </Paragraph>
        <Link href={type === 'sign-up' ? '/signin' : '/signup'}>
          <Paragraph
            cursor={'pointer'}
            size="$2"
            fontWeight={'700'}
            opacity={0.5}
            hoverStyle={{ opacity: 0.4 }}
          >
            {type === 'sign-up' ? '登录' : '注册'}
          </Paragraph>
        </Link>
      </XStack>
    </YStack>
  )
}
