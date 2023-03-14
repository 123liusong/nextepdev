/*
 * @Author: liusong 2227616052@qq.com
 * @Date: 2023-03-12 11:47:01
 * @LastEditors: liusong 2227616052@qq.com
 * @LastEditTime: 2023-03-14 20:41:50
 * @FilePath: \nextepdev\src\features\home\schedule\screen.tsx
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import DayView from "./views/day";
import MonthView from "./views/month";
import WeekView from "./views/week";
const renderScene = SceneMap({
  month: MonthView,
  week: WeekView,
  day: DayView,
});
export default function ScheduleScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: "month", title: "月视图" },
    { key: "week", title: "周视图" },
    { key: "day", title: "日视图" },
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
