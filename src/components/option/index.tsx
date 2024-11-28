import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

type Props = TouchableOpacityProps & {
    name: string,
    icon: keyof typeof MaterialIcons.glyphMap,
    variant?: "primary" | "secundary",
}

export function Option({ name, icon, variant = "primary", ...resto }: Props){
    return (
        <TouchableOpacity style={styles.container} {...resto}>
            <MaterialIcons 
                name={icon}
                size={20}
                color={variant === "primary" ? colors.green[300] : colors.gray[400]}
            />

            <Text style={
                variant === "primary" ? styles.primaryTitle : styles.secundaryTitle
            }>
                {name}
            </Text>
        </TouchableOpacity>
    )
}