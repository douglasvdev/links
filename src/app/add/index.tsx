import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { router } from "expo-router";

import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function Add() {
    const [category, setCategory] = useState("");
    const [nome, setNome] = useState("");
    const [url, setUrl] = useState("");

    function handleAdd(){
        if (!category) {
            return Alert.alert("Categoria", "Seleciona a categoria!");
        }

        if (!nome.trim()) {
            return Alert.alert("Nome", "Informe o nome!");
        }

        if (!url.trim()) {
            return Alert.alert("Url", "Informe a URL!");
        }

        console.log({category, nome, url})
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>
                
                <Text style={styles.title}>Novo</Text>
            </View>
            <Text style={styles.label}>
                Selecione uma categoria
            </Text>
            <Categories onChange={setCategory} selected={category}/>

            <View style={styles.form}>
                {/* <Input placeholder="Nome" onChangeText={(valor) => console.log(valor)}/> */}
                <Input placeholder="Nome" onChangeText={setNome}/>
                <Input placeholder="Url" onChangeText={setUrl} autoCorrect={false} />
                <Button title="Adicionar" onPress={handleAdd}/>
            </View>

        </View>
    )
}