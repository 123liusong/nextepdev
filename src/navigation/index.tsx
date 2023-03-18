/*
 * @Author: liusong 2227616052@qq.com
 * @Date: 2023-03-11 17:35:04
 * @LastEditors: liusong 2227616052@qq.com
 * @LastEditTime: 2023-03-14 23:06:21
 * @FilePath: \nextepdev\src\navigation\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import FeedBackScreen from "../features/home/extensions/feedback/screen";
import FileScreen from "../features/home/extensions/file/screen";
import ListScreen from "../features/home/extensions/list/screen";
import PdfScreen from "../features/home/extensions/markdown/screen";
import PluginScreen from "../features/home/extensions/plugin/screen";
import ExtensionsScreen from "../features/home/extensions/screen";
import ScheduleScreen from "../features/home/schedule/screen";
import HomeScreen from "../features/home/screen";
import PWDModifyScreen from "../features/home/settings/pwdmodify/screen";
import SettingsScreen from "../features/home/settings/screen";
import TeamDetailScreen from "../features/home/team/detail/screen";
import TeamScreen from "../features/home/team/screen";
import SignInScreen from "../features/signin/screen";
import { SignUpScreen } from "../features/signup/screen";

const Stack = createNativeStackNavigator<StackNavigatorParams>();

export const NativeNavigation: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "登录",
        }}
        name="signin"
        component={SignInScreen}
      />
      <Stack.Screen
        options={{
          title: "注册",
        }}
        name="signup"
        component={SignUpScreen}
      />
      <Stack.Screen
        options={{
          title: "主页",
          headerShown: false,
        }}
        name="home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          title: "日程",
        }}
        name="schedule"
        component={ScheduleScreen}
      />
      <Stack.Screen
        options={{
          title: "团队",
        }}
        name="team"
        component={TeamScreen}
      />
      <Stack.Screen
        options={{
          title: "扩展",
        }}
        name="extensions"
        component={ExtensionsScreen}
      />
      <Stack.Screen
        options={{
          title: "设置",
        }}
        name="settings"
        component={SettingsScreen}
      />
      <Stack.Screen
        options={{
          title: "密码修改",
        }}
        name="pwdmodify"
        component={PWDModifyScreen}
      />
      <Stack.Screen
        options={{
          title: "我的文件",
        }}
        name="myfiles"
        component={FileScreen}
      />
      <Stack.Screen
        options={{
          title: "我的清单",
        }}
        name="mylist"
        component={ListScreen}
      />

      <Stack.Screen
        options={{
          title: "快速笔记",
        }}
        name="quicknote"
        component={PdfScreen}
      />
      <Stack.Screen
        options={{
          title: "插件",
        }}
        name="plugin"
        component={PluginScreen}
      />
      <Stack.Screen
        options={{
          title: "反馈",
        }}
        name="feedback"
        component={FeedBackScreen}
      />
      <Stack.Screen
        options={{
          title: "团队详情",
        }}
        name="teamdetail"
        component={TeamDetailScreen}
      />

    </Stack.Navigator>
  );
};
