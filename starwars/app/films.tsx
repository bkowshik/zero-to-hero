import { COLORS } from "@/constants/colors";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Film } from "@/types/interfaces";
import FilmItem from "@/components/FilmItem";
import ListEmptyComponent from "@/components/ListEmptyComponent";

const Films = () => {
    const [films, setFilms] = useState<Film[]>([]);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchFilms = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://swapi.dev/api/films/");
            const data = await response.json();
            setFilms(data.results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }

    // useEffect is a hook that runs after the first render of the component
    useEffect(() => {
        fetchFilms();
    }, []);

    const renderItem = ({ item }: { item: Film }) => {
        return <Text style={{ color: "#fff" }}>{item.title}</Text>;
    }

    const onRefresh = () => {
        setRefreshing(true);
        fetchFilms();
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={films}
                keyExtractor={(item) => item.episode_id.toString()}
                renderItem={({ item }) => <FilmItem item={item} />}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={COLORS.text} />
                }
                ListEmptyComponent={<ListEmptyComponent loading={loading} message="No films found" />}
            />
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.containerBackground,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default Films;