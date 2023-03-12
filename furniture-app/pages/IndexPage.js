import { SafeAreaView, View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, StatusBar } from "react-native";
import { data } from "../Content";

const IndexPage = ({navigation}) => {
  return (
    <View style={{flex:1, marginTop: StatusBar.currentHeight}}>
      {/* Header */}
      <View style={styles.header}>
        <SafeAreaView>
          <Text style={styles.headerText}>Retr0's Furniture</Text>
          <Text style={{...styles.headerText, fontSize:15}}>The best furniture in the world</Text>
        </SafeAreaView>
      </View>
      {/* Scrollview */}
      <ScrollView style={{flexGrow:0, flexShrink:1}}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity 
              key={index} 
              style={styles.container}
              onPress={() => navigation.navigate("DetailPage", {item})}
            >
              <Image style={styles.image} source={item.image} />
              <View style={styles.innerImage}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={{...styles.text, color:"gray"}}>${addCommas(item.price)}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  );
}
 
export default IndexPage;