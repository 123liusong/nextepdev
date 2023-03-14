import {
  Check,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Cloud,
  Moon,
  Sun
} from "@tamagui/lucide-icons";
import { Component, useState } from "react";
import { useRouter } from "solito/router";
import {
  Adapt,
  AlertDialog,
  Avatar,
  Button,
  Input,
  Label,
  LinearGradient,
  Paragraph,
  Select,
  Separator,
  Sheet,
  Text,
  XStack,
  YStack
} from "tamagui";

class AvatarCom extends Component {
  render() {
    return (
      <AlertDialog native>
        <AlertDialog.Trigger asChild>
        <Avatar circular size="$6">
            <Avatar.Image src="http://placekitten.com/200/300" />
            <Avatar.Fallback bc="red" />
          </Avatar>
        </AlertDialog.Trigger>

        <AlertDialog.Portal>
          <AlertDialog.Overlay
            key="overlay"
            animation="quick"
            o={0.5}
            enterStyle={{ o: 0 }}
            exitStyle={{ o: 0 }}
          />
          <AlertDialog.Content
            bordered
            elevate
            key="content"
            animation={[
              "quick",
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            x={0}
            scale={1}
            opacity={1}
            y={0}
          >
            <YStack space>
              <AlertDialog.Title>提示</AlertDialog.Title>
              <AlertDialog.Description>
                需要修改头像？
              </AlertDialog.Description>

              <XStack space="$3" jc="flex-end">
                <AlertDialog.Cancel asChild>
                  <Button>取消</Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <Button theme="active">修改</Button>
                </AlertDialog.Action>
              </XStack>
            </YStack>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog>
    );
  }
}
export default function SettingsScreen() {
  const { push } = useRouter();
  const [themeVal, setThemeVal] = useState("自动");
  const fakedata = {
    id: 1,
    username: "Nate Wienert",
    email: "fake@nextep.com",
    avatar: "https://avatars.githubusercontent.com/u/22276161?v=4",
    settings: "{'theme':2,}",
  };
  const themes = [
    {
      name: "白天",
      icon: <Sun color="yellow10" size={20} />,
    },
    {
      name: "夜间",
      icon: <Moon color="blue10" size={16} />,
    },
    {
      name: "自动",
      icon: <Cloud color="green6" size={16} />,
    },
  ];
  // func
  const handlePwdModify = () => {
    push("/home/settings/pwdmodify");
  };
  return (
    <YStack p="$3" miw={300} space="$4">
      <YStack>
        <Paragraph>个人设置</Paragraph>
        <Separator borderColor="" als="stretch" />
      </YStack>
      <XStack ai="center" space="$4">
        <Label w={90} htmlFor="name">
          头像
        </Label>
        {/* <Avatar circular size="$6">
          <Avatar.Image src="http://placekitten.com/200/300" />
          <Avatar.Fallback bc="red" />
        </Avatar> */}
        <AvatarCom/>
      </XStack>
      <XStack ai="center" space="$4">
        <Label w={90} htmlFor="name">
          用户名
        </Label>
        <Input f={1} id="name" value={fakedata.username} defaultValue="null" />
      </XStack>
      <XStack ai="center" space="$4">
        <Label w={90} htmlFor="email">
          邮箱
        </Label>
        <Text>{fakedata.email}</Text>
      </XStack>
      <XStack ai="center" space="$4">
        <Label w={90} htmlFor="email">
          密码
        </Label>
        <Button chromeless onPress={handlePwdModify} iconAfter={ChevronRight}>
          更改密码
        </Button>
      </XStack>
      <YStack>
        <Paragraph>系统设置</Paragraph>
        <Separator borderColor="" als="stretch" />
      </YStack>
      <XStack ai="center" space="$4">
        <Label w={90} htmlFor="email">
          主题
        </Label>
        <Select id="food" value={themeVal} onValueChange={setThemeVal}>
          <Select.Trigger w={180} iconAfter={ChevronDown}>
            <Select.Value placeholder="主题选择" />
          </Select.Trigger>

          <Adapt when="sm" platform="touch">
            <Sheet modal dismissOnSnapToBottom>
              <Sheet.Frame>
                <Sheet.ScrollView>
                  <Adapt.Contents />
                </Sheet.ScrollView>
              </Sheet.Frame>
              <Sheet.Overlay />
            </Sheet>
          </Adapt>

          <Select.Content zIndex={200000}>
            <Select.ScrollUpButton
              ai="center"
              jc="center"
              pos="relative"
              w="100%"
              h="$3"
            >
              <YStack zi={10}>
                <ChevronUp size={20} />
              </YStack>
              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                fullscreen
                colors={["$background", "$backgroundTransparent"]}
                br="$4"
              />
            </Select.ScrollUpButton>

            <Select.Viewport minWidth={200}>
              <Select.Group space="$-0">
                <Select.Label>Fruits</Select.Label>
                {themes.map((item, i) => {
                  return (
                    <Select.Item
                      index={i}
                      key={item.name}
                      value={item.name.toLowerCase()}
                    >
                      <Select.ItemText space="$2">
                        {item.name}
                        {item.icon}
                      </Select.ItemText>
                      <Select.ItemIndicator ml="auto">
                        <Check size={16} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  );
                })}
              </Select.Group>
            </Select.Viewport>

            <Select.ScrollDownButton
              ai="center"
              jc="center"
              pos="relative"
              w="100%"
              h="$3"
            >
              <YStack zi={10}>
                <ChevronDown size={20} />
              </YStack>
              <LinearGradient
                start={[0, 0]}
                end={[0, 1]}
                fullscreen
                colors={["$backgroundTransparent", "$background"]}
                br="$4"
              />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select>
      </XStack>
    </YStack>
  );
}
