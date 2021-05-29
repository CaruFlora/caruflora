import * as React from "react";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ListItem, Avatar, CheckBox, Text } from "react-native-elements";
import queryManager from "../managers/QueryManager";
import ThemedStyles from "../styles/ThemedStyles";
import { SectionType, ItemType } from "../types";



export default function DynamicRadioList({
  navigation,
  newSections,
  isHierba,
  onSetHierba,
  onSetTipo,
  onAllChecked,
  onResult,
}: any) {
  const [sections, setSections] = useState<Array<SectionType>>(newSections);

  const theme = ThemedStyles.style;

  useEffect(() => {
    return () => {
      sections.map((section: SectionType) => {
        section.items.map((item: ItemType) => (item.checked = false));
        queryManager.guidedQueryFilter.set(section.col, '');
      });
      onAllChecked(false);
    };
  }, [newSections]);

  const doCheck = (item: ItemType, section: SectionType) => {
    section.items.forEach((r: ItemType) => {
      r.checked = false;
    });
    item.checked = !item.checked;
    setSections([...sections]);
    let seekForHierba = isHierba;
    if (item.formaVida) {
      if (item.hierba && !isHierba) {
        onSetHierba(true);
        seekForHierba = true;
      } else if (!item.hierba && isHierba) {
        onSetHierba(false);
        seekForHierba = false;
      }
    }
    if (onSetTipo && item.isTipo) {
      onSetTipo(item.title);
    }
    queryManager.getByGuidedQuery(section.col, item.title, onResult, seekForHierba);
  };

  const renderItem = (item: ItemType, section: SectionType, index: number) => {
    if (item.soloHierbas && !isHierba) {
      return null;
    }
    if (item.soloArboles && isHierba) {
      return null;
    }
    return (
      <ListItem
        bottomDivider
        onPress={() => {
          doCheck(item, section);
        }}
        key={`listItem${section.id}.${index}`}
      >
        {item.imageurl && <Avatar source={item.imageurl} size={"large"} />}
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <CheckBox
          center
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={item.checked}
          onPress={() => {
            doCheck(item, section);
          }}
        />
      </ListItem>
    );
  };

  if (sections.every((section: SectionType) => (section.soloHierbas && !isHierba) || section.items.some((item: ItemType) => item.checked))) {
    onAllChecked(true);
  }

  return (
    <View style={[theme.flexContainer]}>
      <ScrollView>
        {sections.map((section: SectionType) => {
          if (section.soloHierbas && !isHierba) {
            return null;
          }

          return (
            <View key={"sec" + section.id}>
              <Text style={styles.title}>{section.title}</Text>
              {section.imageurl && (
                <Avatar
                  source={section.imageurl}
                  size={"large"}
                  containerStyle={styles.avatarContainer}
                />
              )}
              <View style={styles.flatListContainer}>
                {section.items.map((item: ItemType, index: number) =>
                  renderItem(item, section, index)
                )}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingLeft: 20,
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  flatListContainer: {
    padding: 20,
  },
  avatarContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
});
