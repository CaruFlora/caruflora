import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ListItem, Avatar, CheckBox, Text } from 'react-native-elements'


export default function DynamicRadioList({ navigation, newSections}: any) {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        setSections(newSections);
    }, [newSections])

    const doCheck = (item: any, section: any) => {
        section.items.forEach((r: any) => { r.checked = false });
        item.checked = !item.checked;
        setSections([...sections]);
    };

    const renderItem = (item: any, section: any) => {
        return <ListItem bottomDivider onPress={() => { doCheck(item, section) }}>
            <Avatar source={{ uri: item.imageurl }} />
            <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <CheckBox
                center
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={item.checked}
                onPress={() => { doCheck(item, section) }}
            />
        </ListItem>;
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView >
                {
                    sections.map((section: any) => {
                        return (

                            <View key={"sec" + section.id}>
                                <Text h4 style={styles.title}>{section.title}</Text>
                                <View style={styles.flatListContainer}>
                                    {
                                        section.items.map((item: any) => renderItem(item, section))
                                    }
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        paddingLeft: 20,
        color: "black"
    },
    flatListContainer: {
        padding: 20
    },
}); 