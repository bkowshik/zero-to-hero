import { COLORS } from "@/constants/colors";
import { Film } from '@/types/interfaces';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';

const FilmItem: React.FC<{ item: Film }> = ({ item }) => {
    const id = item.url.split('/').filter(Boolean).pop();
    console.log(id);

    return (
        <Link href={`/films/${id}`} asChild>
            <TouchableOpacity>
                <View style={styles.fileItem}>
                    <Text style={styles.filmTitle}>{item.title}</Text>
                    <Text style={styles.fileDetails}>Episode: {item.episode_id}</Text>
                    <Text style={styles.fileDetails}>Released: {item.release_date}</Text>
                </View>
            </TouchableOpacity>
        </Link>
    );
}

const styles = StyleSheet.create({
    fileItem: {
        backgroundColor: COLORS.background,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
    },
    filmTitle: {
        fontSize: 18,
        color: COLORS.text,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    fileDetails: {
        fontSize: 14,
        color: "#fff",
    }
});
export default FilmItem;
