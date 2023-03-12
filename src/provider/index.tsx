/*
 * @Author: liusong 2227616052@qq.com
 * @Date: 2023-03-11 17:35:04
 * @LastEditors: liusong 2227616052@qq.com
 * @LastEditTime: 2023-03-12 11:58:06
 * @FilePath: \nextepdev\src\provider\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { NavigationContainer } from "@react-navigation/native";
import { Suspense, useMemo } from "react";
import { TamaguiProvider } from "tamagui";

import config from "../tamagui.config";

export const Provider: FCC = ({ children }) => {
  return (
    <TamaguiProvider config={config}>
      <Suspense>
        <NavigationContainer
          linking={useMemo(
            () => ({
              prefixes: ["https://nextepdev.com", "nextepdev://"],
              config: {
				initialRouteName: "signin",
                screens: {
                  signin: "signin",
                  signup: "signup",
                  home: "home",
                  schedule: "/home/schedule",
                  team: "/home/team",
                  extensions: "/home/extensions",
                  settings: "/home/settings",
                  notfound:"/notfound"
                },
              },
            }),
            []
          )}
        >
          {children}
        </NavigationContainer>
      </Suspense>
    </TamaguiProvider>
  );
};
