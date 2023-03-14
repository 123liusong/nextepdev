import { Check as CheckIcon, Star } from "@tamagui/lucide-icons";
import React from "react";
import { Checkbox, ListItem, ScrollView, XStack } from "tamagui";
export default function ListScreen() {
  return (
    <ScrollView p={"$4"}>
      {Array.from({ length: 22 }).map((_, i) => {
        return (
          <XStack ai="center">
            <Checkbox id={i.toString()} size="$7" >
              <Checkbox.Indicator>
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox>
            <ListItem hoverTheme icon={Star} title="Star" subTitle="Twinkles" ></ListItem>
          </XStack>
        );
      })}
    </ScrollView>
  );
}
