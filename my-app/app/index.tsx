import { Button, Text, View, Image, ScrollView, TextInput, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <Text>Please fill the form below and hit submit.</Text>
        <TextInput placeholder="Enter some text" style={{ width: 200, height: 40, margin: 10 }} />
        <Button title="Submit" onPress={() => alert('Form submitted successfully!')} />
        <Image source={require('@/assets/images/react-logo.png')} />
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: '#160225',
    flex: 1,
  }
});
