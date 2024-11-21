import { FlatList, Image, Modal, Text, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles"
import { colors } from "@/styles/colors"

import { Link } from "@/components/link"
import { Categories } from "@/components/categories"
import { Option } from "@/components/option"

// import { Category } from "@/components/category"
// import { categories } from "@/utils/categories"

export default function Index(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />

                <TouchableOpacity>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>

            <Categories />

            
            <FlatList 
                data={["1", "2", "3", "4"]} 
                keyExtractor={(item) => item} 
                renderItem={() => (
                    <Link name="RocketSeat" url="https://www.rocketseat.com.br/" onDetails={() => console.log("Clicou!!")}/>
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

        </View>
    )
}