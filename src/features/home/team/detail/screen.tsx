import {
  Check,
  ChevronDown,
  ChevronUp,
  Plus,
  Star,
  UserPlus,
  X
} from "@tamagui/lucide-icons";
import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";
import {
  Adapt,
  Button,
  Circle,
  Dialog,
  Fieldset,
  Input,
  Label,
  LinearGradient,
  ListItem,
  Paragraph,
  ScrollView,
  Select,
  Separator,
  Sheet,
  SizableText,
  Square,
  Tabs,
  Text,
  TextArea,
  TooltipSimple,
  Unspaced,
  XStack,
  YGroup,
  YStack
} from "tamagui";
export default function TeamDetailScreen() {
  const fakedata = {
    name: "ACTR组织",
    description: "这是一个组织",
    leader: "Nate Wienert",
    member: [
      {
        id: 1,
        name: "Nate Wienert",
      },
      {
        id: 2,
        name: "张三",
      },
      {
        id: 3,
        name: "李四",
      },
      {
        id: 4,
        name: "王五",
      },
      {
        id: 5,
        name: "赵六",
      },
      {
        id: 6,
        name: "孙七",
      },
    ],
  };
  const [val, setVal] = useState(fakedata.member[0].name.toLowerCase());
  //颜色随机
  const randomColor = () => {
    let color = "$";
    let colorT = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];
    //随机数
    let random = Math.floor(Math.random() * 7);
    color += colorT[random] + "9";
    return color;
  };
  // 文件点击事件
  const handlePressFile = async () => {
    //跳转到文件详情
    alert("文件详情");
  };
  // 文件滑动事件
  const handleSwipeFile = async () => {
    //删除文件
    alert("删除文件");
  };

  // 清单点击事件
  const handlePressList = async () => {
    //跳转到清单详情
    alert("清单详情");
  };
  // 清单滑动事件
  const handleSwipeList = async () => {
    //删除清单
    alert("删除清单");
  };
  //文件上传
  const handleUploadFile = async () => {
    //上传文件
    DocumentPicker.getDocumentAsync({ type: "application/*" }).then(
      (res) => {}
    );
  };
  return (
    <Tabs
      defaultValue="tab1"
      orientation="horizontal"
      flexDirection="column"
      width={"100%"}
      height={"100%"}
      br="$4"
    >
      <Tabs.List
        disablePassBorderRadius="bottom" 
        aria-label="Manage your account"
      >
        <Tabs.Trigger theme="Button" f={1} value="tab1">
          <SizableText fontFamily="$body">信息</SizableText>
        </Tabs.Trigger>
        <Tabs.Trigger theme="Button" f={1} value="tab2">
          <SizableText fontFamily="$body">日程</SizableText>
        </Tabs.Trigger>
        <Tabs.Trigger theme="Button" f={1} value="tab3">
          <SizableText fontFamily="$body">附件</SizableText>
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="tab1" key="tab1" p="$3" ai="center" f={1}>
        <YStack p="$3" miw={300} space="$4">
          <XStack ai="center" space="$4">
            <Label w={90} htmlFor="name">
              团队名称
            </Label>
            <Input f={1} id="name" defaultValue="null" value={fakedata.name} />
          </XStack>
          <XStack ai="center" space="$4">
            <Label w={90} htmlFor="description">
              团队描述
            </Label>
            <TextArea
              id="description"
              mih={100}
              f={1}
              value={fakedata.description}
              placeholder="Enter your details..."
              numberOfLines={4}
            />
          </XStack>
          <XStack ai="center" space="$4">
            <Label w={90} htmlFor="leader">
              团队管理
            </Label>
            <Select id="leader" value={val} onValueChange={setVal}>
              <Select.Trigger w={180} iconAfter={ChevronDown}>
                <Select.Value placeholder="Something" />
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
                    <Select.Label>成员</Select.Label>
                    {fakedata.member.map((item, i) => {
                      return (
                        <Select.Item
                          index={i}
                          key={item.name}
                          value={item.name.toLowerCase()}
                        >
                          <Select.ItemText>{item.name}</Select.ItemText>
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
          <Separator my={8} />
          <ScrollView maxHeight={300} width={"100%"} bc="$background" br="$4">
            <XStack flexWrap="wrap" ai="center" jc="center">
              <Circle m="$4" size={60} bc="$blue9">
                <UserPlus color="$blue1" />
              </Circle>
              {fakedata.member.map((item, i) => {
                return (
                  <Square
                    m="$4"
                    size={60}
                    bc={randomColor()}
                    onPress={() => {
                      alert(item.name);
                    }}
                  >
                    <Text color="$blue1">{item.name}</Text>
                  </Square>
                );
              })}
            </XStack>
          </ScrollView>
        </YStack>
      </Tabs.Content>

      <Tabs.Content
        value="tab2"
        key="tab2"
        p="$3"
        width={"100%"}
        ai="center"
        jc="center"
        f={1}
      ></Tabs.Content>

      <Tabs.Content
        value="tab3"
        key="tab3"
        p="$3"
        ai="center"
        jc="center"
        f={1}
      >
        <XStack ai="center">
          <SizableText size="$3">文件 </SizableText>
          <Dialog modal>
            <Dialog.Trigger asChild>
              <Button size="$3" themeInverse ml={"$3"} iconAfter={Plus} />
            </Dialog.Trigger>

            <Adapt when="sm" platform="touch">
              <Sheet zIndex={200000} modal dismissOnSnapToBottom>
                <Sheet.Frame padding="$4" space>
                  <Adapt.Contents />
                </Sheet.Frame>
                <Sheet.Overlay />
              </Sheet>
            </Adapt>

            <Dialog.Portal>
              <Dialog.Overlay
                key="overlay"
                animation="quick"
                o={0.5}
                enterStyle={{ o: 0 }}
                exitStyle={{ o: 0 }}
              />

              <Dialog.Content
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
                space
              >
                <Dialog.Title>添加文件</Dialog.Title>
                <Dialog.Description>
                  如需修改文件，请点击修改文件名
                </Dialog.Description>
                <Fieldset space="$4" horizontal>
                  <Label w={100}  justifyContent="flex-end" htmlFor="name">
                    修改文件名
                  </Label>
                  <Input id="name"  f={1} placeholder="文件名" />
                 
                </Fieldset>
                <Fieldset space="$4" horizontal>
                  <Label w={100} justifyContent="flex-end" htmlFor="username">
                    <TooltipSimple
                      label="Pick your favorite"
                      placement="bottom-start"
                    >
                      <Paragraph  >添加文件</Paragraph>
                    </TooltipSimple>
                  </Label>
                  <Button  onPress={handleUploadFile}>添加文件</Button>
                </Fieldset>

                <YStack ai="flex-end" mt="$2">
                  <Dialog.Close displayWhenAdapted asChild>
                    <Button themeInverse  aria-label="Close">
                      上传文件
                    </Button>
                  </Dialog.Close>
                </YStack>

                <Unspaced>
                  <Dialog.Close asChild>
                    <Button
                      pos="absolute"
                      t="$3"
                      r="$3"
                      size="$2"
                      circular
                      icon={X}
                    />
                  </Dialog.Close>
                </Unspaced>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog>
        </XStack>
        <ScrollView maxHeight={"42%"} width={"100%"} bc="$background" br="$4">
          <YGroup
            als="center"
            bordered
            size="$4"
            mb="$6"
            separator={<Separator />}
          >
            <YGroup.Item>
              <ListItem
                hoverTheme
                pressTheme
                icon={Star}
                title="ACTR组织"
                subTitle="加入的"
                onPress={handlePressFile}
                onTouchMove={handleSwipeFile}
              />
            </YGroup.Item>
          </YGroup>
        </ScrollView>
        <XStack alignItems="center">
          <SizableText size="$3">清单</SizableText>
          <Dialog modal>
            <Dialog.Trigger asChild>
              <Button size="$3" ml={"$4"} themeInverse iconAfter={Plus} />
            </Dialog.Trigger>

            <Adapt when="sm" platform="touch">
              <Sheet zIndex={200000} modal dismissOnSnapToBottom>
                <Sheet.Frame padding="$4" space>
                  <Adapt.Contents />
                </Sheet.Frame>
                <Sheet.Overlay />
              </Sheet>
            </Adapt>

            <Dialog.Portal>
              <Dialog.Overlay
                key="overlay"
                animation="quick"
                o={0.5}
                enterStyle={{ o: 0 }}
                exitStyle={{ o: 0 }}
              />

              <Dialog.Content
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
                space
              >
                <Dialog.Title>添加清单</Dialog.Title>
                <Dialog.Description>
                  请输入清单名称、数量等信息
                </Dialog.Description>
                <Fieldset space="$4" horizontal>
                  <Label w={100} justifyContent="flex-end" htmlFor="name">
                   名称*
                  </Label>
                  <Input f={1} id="name" defaultValue="清单名称" />
                </Fieldset>
                <Fieldset space="$4" horizontal>
                  <Label w={100} justifyContent="flex-end" htmlFor="username">
                    <TooltipSimple
                      label="Pick your favorite"
                      placement="bottom-start"
                    >
                      <Paragraph>数量</Paragraph>
                    </TooltipSimple>
                  </Label>
                  <Input f={1} id="username" defaultValue="" />
                </Fieldset>

                <YStack ai="flex-end" mt="$2">
                  <Dialog.Close displayWhenAdapted asChild>
                    <Button themeInverse aria-label="Close">
                      添加清单
                    </Button>
                  </Dialog.Close>
                </YStack>

                <Unspaced>
                  <Dialog.Close asChild>
                    <Button
                      pos="absolute"
                      t="$3"
                      r="$3"
                      size="$2"
                      circular
                      icon={X}
                    />
                  </Dialog.Close>
                </Unspaced>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog>
        </XStack>
        <ScrollView maxHeight={"42%"} width={"100%"} bc="$background" br="$4">
          <YGroup
            als="center"
            bordered
            size="$4"
            mb="$6"
            separator={<Separator />}
          >
            <YGroup.Item>
              <ListItem
                hoverTheme
                pressTheme
                icon={Star}
                title="ACTR组织"
                subTitle="加入的"
                onPress={handlePressList}
                onTouchMove={handleSwipeList}
              />
            </YGroup.Item>
          </YGroup>
        </ScrollView>
      </Tabs.Content>
    </Tabs>
  );
}
