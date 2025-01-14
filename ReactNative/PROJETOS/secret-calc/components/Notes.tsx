import { FlatList, StyleSheet, Text, View } from "react-native";

export function Notes() {
    const notes = [
        {
            title: "Planos para 2025",
            note: `
            [ ]  ̶A̶c̶o̶r̶d̶a̶r̶ ̶c̶e̶d̶o̶
            [...] Primeira divisão efootball
            [ ]  ̶S̶e̶r̶ ̶l̶o̶w̶ ̶p̶r̶o̶f̶i̶l̶e̶(o pai é muita mídia)
            [X] Parar de ser o Kross
            `,
        },
        {
            title: "F1",
            note: `
            "Xereca maldita, sempre caí na armadilha."
            `,
        },
        {
            title: "F2",
            note: `
            "Mas quem vê cara, não vê coração. Eu to de short não da pra tu ver meu piru durão."
            `,
        },
        {
            title: "F3",
            note: `
            "Amaciante, amar-ciante, amar a si antes, sem receio, seu cu na reta, meu pau sem freio."
            `,
        },
        {
            title: "F4",
            note: `
            "Tudo passa, e tudo passarás, é mais fácil se esquecer de quem tu nunca beijarás."
            `,
        },
        {
            title: "F5",
            note: `
            "Eu já quis ser doutor, mas tudo mudou, eu troco tiro todo dia na semana."
            `,
        },
        {
            title: "gerador de texto",
            note: `
               O Gerador de Texto Tachado é uma ferramenta online versátil que permite transformar texto simples em uma variedade de estilos únicos usando caracteres Unicode. Se você deseja criar um efeito de tachado, adicionar uma barra no texto, sublinhar ou aplicar estilos mais criativos como sublinhado duplo, linha pontilhada ou linha ondulada, esta ferramenta é ideal. É perfeito para quem quer destacar seu texto nas redes sociais, em chats ou até mesmo em conteúdo profissional.
            `,
        },
    ];
    return (
        <View>
            <View>
                <FlatList
                    data={notes}
                    renderItem={({ item }) => (
                        <View style={styles.noteBox}>
                            <Text style={styles.noteTitle}>{item.title}</Text>
                            <Text>{item.note}</Text>
                            <Text>
                                ------------------------------------------------------------------------------------------------------
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    noteBox: {
        backgroundColor: "#e7e7e7",
    },
    noteTitle: {
        fontSize: 16,
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    note: {},
});
