/*
 * @Author: liusong 2227616052@qq.com
 * @Date: 2023-03-11 17:35:04
 * @LastEditors: liusong 2227616052@qq.com
 * @LastEditTime: 2023-03-12 11:30:21
 * @FilePath: \nextepdev\src\navigation\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import ExtensionsScreen from "../features/home/extensions/screen";
import ScheduleScreen from "../features/home/schedule/screen";
import HomeScreen from "../features/home/screen";
import SettingsScreen from "../features/home/settings/screen";
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
        
      
    
            

      
    </Stack.Navigator>
  );
};
