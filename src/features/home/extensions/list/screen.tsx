import { Plus, Star, X } from "@tamagui/lucide-icons";
import React from "react";
import { Adapt, Button, Dialog, Fieldset, Input, Label, ListItem, Paragraph, ScrollView, Separator, Sheet, SizableText, TooltipSimple, Unspaced, XStack, YGroup, YStack } from "tamagui";
export default function ListScreen() {
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

  return (
<YStack >
<XStack w={"100%"} alignItems="center" justifyContent="space-between" px="$4" py='$2'>
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
</YStack>
  );
}
