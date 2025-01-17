import { View, Text, StyleSheet, FlatList } from "react-native"
import { Button, ListItem, Avatar, FAB } from "@rneui/base";
import { getAllLaptops } from "../rest_laptops/laptops";
import { useState } from "react";

export const LaptopList = ({navigation}) => {
    const [laptopsList, setLaptopsList] = useState([]);
    const LaptopItem = ({ laptop }) => {
        return <ListItem>
            <ListItem.Content style={styles.list}>
                <ListItem.Title><Avatar rounded title={laptop.id} containerStyle={{ backgroundColor: "purple" }} /> {laptop.marca} {laptop.procesador}</ListItem.Title>
                <ListItem.Subtitle>Memoria: {laptop.memoria}</ListItem.Subtitle>
                <ListItem.Subtitle>Disco: {laptop.disco}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    }

    fnRefreshList = (laptops) => {
        setLaptopsList(laptops);
    }
    return (<View style={styles.container}>
        <Text style={styles.title}>Lista Contactos</Text>
        <Button style={styles.button} color='purple' radius={30} type="solid" size="lg" title="Consultar" onPress={() => { getAllLaptops(fnRefreshList) }} />
        <FlatList data={laptopsList} renderItem={({ item }) => {
            return <LaptopItem laptop={item} />
        }} />
        <FAB title="+" onPress={() => { navigation.navigate("LaptopFormNav") }} />
    </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'mediumpurple',
        padding: '10',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    list: {
        backgroundColor: 'orchid',
        padding: '10',
        borderRadius: 20
    },
    listItem: {
        margin: '10',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        marginVertical: 20,
        color: 'white'
    },
});
