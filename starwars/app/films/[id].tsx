import { COLORS } from "@/constants/colors";
import { Film } from '@/types/interfaces';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
const Page = () => {
    const { id } = useLocalSearchParams()
    const [film, setFilm] = useState<Film | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/films/${id}`);
                const data = await response.json();
                setFilm(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchFilm();
    }, [id]);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={{ color: '#fff' }}>Loading ...</Text>
            </View>
        )
    }

    if (!film) {
        return (
            <View>
                <Text style={{ color: '#fff' }}>Film not found</Text>
            </View>
        )
    }

    return (
        <ScrollView>
            <View>
                <Text style={styles.title}>{film.title}</Text>
                <Text style={styles.detail}>Episode: {film.episode_id}</Text>
                <Text style={styles.detail}>Director: {film.director}</Text>
                <Text style={styles.detail}>Producer: {film.producer}</Text>
                <Text style={styles.detail}>Release Date: {film.release_date}</Text>
                <Text style={styles.crawl}>{film.opening_crawl}</Text>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: COLORS.containerBackground,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 16,
    },
    detail: {
        fontSize: 16,
        marginBottom: 8,
        color: COLORS.text,
    },
    crawl: {
        fontSize: 20,
        marginBottom: 8,
        color: COLORS.text,
        marginTop: 16,
        fontStyle: 'italic',
    }
});
export default Page;