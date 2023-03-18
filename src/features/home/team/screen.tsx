/*
 * @Author: liusong 2227616052@qq.com
 * @Date: 2023-03-12 11:46:00
 * @LastEditors: liusong 2227616052@qq.com
 * @LastEditTime: 2023-03-12 22:32:51
 * @FilePath: \nextepdev\src\features\home\team\screen.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { Cloud, Moon, Star, Sun } from "@tamagui/lucide-icons";
import React from "react";
import { useRouter } from "solito/router";
import { ListItem, ScrollView, Separator, YGroup } from "tamagui";

export default function TeamScreen() {
  const {push} = useRouter();
  const handlePress = async() => {
    push('/home/team/detail');
  };
  return (
    <ScrollView bc="$background" px="$4" pt="$4" br="$4">
      <YGroup als="center" bordered size="$4" mb="$6" separator={<Separator />}>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            onPress={handlePress}
            icon={Star}
            title="ACTR组织"
            subTitle="加入的"
          >
          </ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={Star}
            title="ACTR组织"
            subTitle="加入的"
          />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={Star}
            title="ACTR组织"
            subTitle="加入的"
          />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={Star}
            title="ACTR组织"
            subTitle="加入的"
          />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={Star}
            title="ACTR组织"
            subTitle="加入的"
          />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={Star}
            title="ACTR组织"
            subTitle="加入的"
          />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={Star}
            title="ACTR组织"
            subTitle="加入的"
          />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={Star}
            title="ACTR组织"
            subTitle="加入的"
          />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={Star}
            title="ACTR组织"
            subTitle="加入的"
          />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={Star}
            title="ACTR组织"
            subTitle="加入的"
          />
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={Moon}
            title="Moon"
            subTitle="管理的"
          ></ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={Sun}
            title="Sun"
            subTitle="管理的"
          ></ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem
            hoverTheme
            pressTheme
            icon={Cloud}
            title="Cloud"
            subTitle="管理的"
          ></ListItem>
        </YGroup.Item>
      </YGroup>
    </ScrollView>
  );
}
