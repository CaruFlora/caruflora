import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import DynamicRadioList from '../components/DynamicRadioList';
import ThemedStyles from '../styles/ThemedStyles';

const background = "../assets/images/40ed82161e22f232c24fe4e57a80a75b.png";
const defaultSections: any = [
    {
        id: 1,
        title: "Forma de vida",
        items: [
            {
                imageurl: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
                title: "Árbol",
                checked: false
            },
            {
                imageurl: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
                title: "Arbusto",
                checked: false
            },
            {
                imageurl: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
                title: "Palmera",
                checked: false
            },
            {
                imageurl: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
                title: "Cactus arborescente",
                checked: false
            }
        ]
    },
    {
        id: 2,
        title: "¿Presencia de espinas o aguijones?",
        items: [
            {
                imageurl: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
                title: "Si",
                checked: false
            },
            {
                imageurl: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
                title: "No",
                checked: false
            },
        ]
    },
];

export default function GuidedSearchScreen({ navigation, route }: any) {
    const theme = ThemedStyles.style;
    const [sections, setSections] = useState([]);

    useEffect(() => {
        if (route?.params?.newSections) {
            setSections(route?.params?.newSections);
        } else {
            setSections(defaultSections);
        }
    }, []);

    const generateRandomScreen = () => {
        navigation.push("GuidedSearchScreen", {
            newSections: [
                {
                    id: Math.random(),
                    title: Math.random(),
                    items: [
                        {
                            imageurl: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
                            title: Math.random(),
                            checked: false
                        },
                        {
                            imageurl: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
                            title: Math.random(),
                            checked: false
                        }
                    ]
                }
            ]
        })
    }

    return (
        <View style={theme.flexContainer}>
            <ImageBackground source={require(background)} style={styles.image}>
                <DynamicRadioList newSections={sections}></DynamicRadioList>
                <View style={styles.footer}>
                    <Button title="Resultados" />
                    <Button title="Más Opciones" onPress={generateRandomScreen} />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: 60,
        width: "100%",
        backgroundColor: "lightblue"
    }
});
