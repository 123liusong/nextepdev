/*
 * @Author: liusong 2227616052@qq.com
 * @Date: 2023-03-12 11:42:35
 * @LastEditors: liusong 2227616052@qq.com
 * @LastEditTime: 2023-03-12 11:49:57
 * @FilePath: \nextepdev\src\features\home\screen.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ExtensionsScreen from "./extensions/screen";
import ScheduleScreen from "./schedule/screen";
import SettingsScreen from "./settings/screen";
import TeamScreen from "./team/screen";
const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ title: "日程" }}
        name="schedule"
        component={ScheduleScreen}
      />
      <Tab.Screen
        options={{ title: "团队" }}
        name="team"
        component={TeamScreen}
      />
      <Tab.Screen
        options={{ title: "扩展" }}
        name="extensions"
        component={ExtensionsScreen}
      />
      <Tab.Screen
        options={{ title: "设置" }}
        name="settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
