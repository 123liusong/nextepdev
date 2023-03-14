import {
  Book,
  ClipboardX,
  File,
  List,
  PackageSearch
} from "@tamagui/lucide-icons";
import React from "react";
import { useRouter } from "solito/router";
import { Circle, ScrollView, SizableText, XStack } from "tamagui";
export default function ExtensionsScreen() {
  const {push} = useRouter(); 
  const ExtensionsItems = [
    {
      title: "我的清单",
      URL: "/home/extensions/mylist",
      icon: <List  />,
    },
    {
      title: "我的文件",
      URL: "/home/extensions/myfiles",
      icon: <File />,
    },
    {
      title: "快速笔记",
      URL: "/home/extensions/quicknote",
      icon: <Book />,
    },
    {
      title: "插件",
      URL: "/home/extensions/plugin",
      icon: <PackageSearch />,
    },
    {
      title: "反馈",
      URL: "/home/extensions/feedback",
      icon: <ClipboardX />,
    },
  ];
  let colorT = ["orange", "red", "green", "blue", "purple", "yellow", "pink"];
  let colorTT = 4;
  //按钮颜色随机
  const randomColor = () => {
    let colort = colorT[Math.floor(Math.random() * colorT.length)];
    let colortt = colorTT + Math.floor(Math.random() * 4);
    return "$" + colort + colortt;
  };

  return (
    <ScrollView w="100%" bc="$background" p="$4" br="$4">
      <XStack flexWrap="wrap" ai="center" jc="center">
        {ExtensionsItems.map((item, index) => (
          <Circle
            key={index}
            m="$4"
            size={100}
            bc={randomColor()}
            onPress={() => {
              push(item.URL);
            }}
          >
             <SizableText theme="alt2" size="$3">
         {item.title}  
        </SizableText>
            {item.icon}
          </Circle>
        ))}
      </XStack>
    </ScrollView>
  );
}
