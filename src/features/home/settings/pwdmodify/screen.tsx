import { useState } from "react";
import { useRouter } from "solito/router";
import { Button, Input, YStack } from "tamagui";
export default function PWDModifyScreen() {
  const {push} =useRouter();
  //旧密码状态
  const [oldPwd, setOldPwd] = useState("");
  //新密码状态
  const [newPwd, setNewPwd] = useState("");
  //确认密码状态
  const [confirmPwd, setConfirmPwd] = useState("");
  //点击密码修改
  const handleEmailWithPress = async (
    oldPwd: string,
    newPwd: string,
    confirmPwd: string
  ) => {
    alert(oldPwd + "--" + newPwd + "--" + confirmPwd);
    push("/signin");
  };

  return (
    <YStack
    m={'auto'}
      borderRadius="$10"
      space
      px="$7"
      py="$6"
      w={350}
      shadowColor={"#00000020"}
      shadowRadius={26}
      shadowOffset={{ width: 0, height: 4 }}
      bg="$background"
    >

      {/* email sign up option */}
      <Input
        placeholder="旧密码"
        onChangeText={(text) => {
          setOldPwd(text);
        }}
        textContentType="password"
      />
      <Input
        placeholder="新密码"
        onChangeText={(text) => {
          setNewPwd(text);
        }}
        textContentType="password"
        secureTextEntry
      />
      <Input
        placeholder="确认密码"
        onChangeText={(text) => {
          setConfirmPwd(text);
        }}
        textContentType="password"
        secureTextEntry
      />

      {/* sign up button */}
      <Button
        themeInverse
        onPress={() => {
          handleEmailWithPress(oldPwd, newPwd, confirmPwd);
        }}
        hoverStyle={{ opacity: 0.8 }}
        onHoverIn={() => {}}
        onHoverOut={() => {}}
        focusStyle={{ scale: 0.975 }}
      >
        修改密码
      </Button>
    </YStack>
  );
}
