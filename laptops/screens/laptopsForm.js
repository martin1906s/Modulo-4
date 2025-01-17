import { View, Text, Alert } from "react-native";
import { Input, Button } from "@rneui/base";
import { useState } from "react";
import { saveLaptopsRest } from "../rest_laptops/laptops";
export const LaptopForm = ({ navigation }) => {
    const [id, setId] = useState(null);
    const [marca, setMarca] = useState("");
    const [procesador, setProcesador] = useState("");
    const [memoria, setMemoria] = useState("");
    const [disco, setDisco] = useState("");

    const showMessage = () => {
        Alert.alert("CONFIRMACIÓN", "Se creó laptop")
    }

    const saveLaptop = () => {
        console.log("Save Laptop");
        navigation.goBack();
        saveLaptopsRest({
            id: id,
            marca: marca,
            procesador: procesador,
            memoria: memoria,
            disco: disco
        },
            showMessage
        )

    }

    return <View>
        <Text>Formulario De Contacto</Text>
        <Input keyboardType="numeric" value={id} placeholder="id" onChangeText={(value) => { setId(value) }} />
        <Input value={marca} placeholder="Marca" onChangeText={(value) => { setMarca(value) }} />
        <Input value={procesador} placeholder="Procesador" onChangeText={(value) => { setProcesador(value) }} />
        <Input value={memoria} placeholder="Memoria" onChangeText={(value) => { setMemoria(value) }} />
        <Input value={disco} placeholder="Disco" onChangeText={(value) => { setDisco(value) }} />
        <Button title="Guardar" onPress={saveLaptop} />
    </View>
}