import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";

const UnitsPicker = ({ unitsSystem, setUnitsSystem }) => {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        selectedValue={unitsSystem}
        onValueChange={(item) => setUnitsSystem(item)}
      >
        <Picker.Item label="C°" value="metric" />
        <Picker.Item label="F°" value="imperial" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  unitsSystem: {
    position: "absolute",
    top: 50,
    left: 20,
    height: 50,
    width: 100,
  },
});
export default UnitsPicker;
