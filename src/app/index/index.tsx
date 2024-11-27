import { useEffect, useState } from "react"
import { Alert, FlatList, Image, Modal, Text, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"

import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { categories } from "@/utils/categories"
import { LinkStorage, linkStorage } from "@/storage/link-storage"

import { Link } from "@/components/link"
import { Option } from "@/components/option"
import { Categories } from "@/components/categories"

// import { Category } from "@/components/category"

export default function Index(){
    const [links, setLinks] = useState<LinkStorage[]>([]);
    const [category, setCategory] = useState(categories[0].name);

    async function getLinks() {
        try {
            const response = await linkStorage.get();
            setLinks(response);
        } catch (error) {
            Alert.alert("Erro", "Não foi possível listar os links");
        }
    }

    useEffect(() => {
        getLinks()
        console.log("CHAMOU!")
    }, [category])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />

                <TouchableOpacity onPress={() => router.navigate("../add")}>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>

            <Categories onChange={setCategory} selected={category}/>

            
            <FlatList 
                data={links} 
                keyExtractor={(item) => item.id} 
                renderItem={({ item }) => (
                    <Link name={item.name} url={item.url} onDetails={() => console.log("Clicou!!")}/>
                )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
            />

            <Modal transparent visible={false}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Curso</Text>

                            <TouchableOpacity>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]}/>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalLinkName}>RocketSeat</Text>
                        <Text style={styles.modalLinkUrl}>https://www.rocketseat.com.br/discover</Text>

                        <View style={styles.modalFooter}>
                            <Option name="Excluir" icon="delete" variant="secundary" />
                            <Option name="Abrir" icon="language" variant="primary" />
                        </View>
                    </View>
                </View>
            </Modal>

            {/* <Category name={categories[5].name} icon={categories[5].icon} isSelected/>
            <Category name="Sites" icon="language" isSelected={false}/>
            <Category name="Videos" icon="movie" isSelected={false}/> */}
            {/* Iniciar o Video - Async Storage - aula 5 */}

        </View>
    )
}