import { Plus, Star, X } from "@tamagui/lucide-icons";
import * as DocumentPicker from "expo-document-picker";
import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  ListItem,
  Paragraph,
  ScrollView,
  Separator,
  Sheet,
  SizableText,
  TooltipSimple,
  Unspaced,
  XStack,
  YGroup,
  YStack
} from "tamagui";
export default function FileScreen() {
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
  //文件上传
  const handleUploadFile = async () => {
    //上传文件
    DocumentPicker.getDocumentAsync({ type: "application/*" }).then(
      (res) => {}
    );
  };
  return (
    <YStack>
      <XStack justifyContent="space-between" px='$4' py='$2' ai="center">
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
                <Label w={100} justifyContent="flex-end" htmlFor="name">
                  修改文件名
                </Label>
                <Input id="name" f={1} placeholder="文件名" />
              </Fieldset>
              <Fieldset space="$4" horizontal>
                <Label w={100} justifyContent="flex-end" htmlFor="username">
                  <TooltipSimple
                    label="Pick your favorite"
                    placement="bottom-start"
                  >
                    <Paragraph>添加文件</Paragraph>
                  </TooltipSimple>
                </Label>
                <Button onPress={handleUploadFile}>添加文件</Button>
              </Fieldset>

              <YStack ai="flex-end" mt="$2">
                <Dialog.Close displayWhenAdapted asChild>
                  <Button themeInverse aria-label="Close">
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
    </YStack>
  );
}
