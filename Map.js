import React, { useState } from "react";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

MapboxGL.setAccessToken(
  "pk.eyJ1IjoiYWJ1emE3IiwiYSI6ImNsdXF6OTQ5djAyOXMycnBhNGNyZDhpbXIifQ.SBBxMC-Q_O1st2OWl5l9Yw"
);

const Map = () => {

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          searchText
        )}.json?access_token=pk.eyJ1IjoiYWJ1emE3IiwiYSI6ImNsdXF6OTQ5djAyOXMycnBhNGNyZDhpbXIifQ.SBBxMC-Q_O1st2OWl5l9Yw`
      );
      const data = await response.json();
      setSearchResults(data.features);
    } catch (error) {
      console.error('Error searching for location:', error);
    }
  };

  const handleSelectLocation = (coordinates) => {
    setSelectedLocation(coordinates);
  };

  const [coordinatesSa] = useState([18.2447, 43.5123]);
  const [coordinatesMo] = useState([17.4827, 43.2037]);
  const [coordinatesBl] = useState([17.1133, 44.4621]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, paddingHorizontal: 10 }}
          placeholder="Enter location"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Button title="Search" onPress={handleSearch} />
        {searchResults.map((result) => (
          <Text key={result.id} onPress={() => handleSelectLocation(result.center)}>
            {result.place_name}
          </Text>
        ))}

        <MapboxGL.MapView style={styles.map}>

          <MapboxGL.Camera
            zoomLevel={5}
            centerCoordinate={selectedLocation}
          />
          {selectedLocation && (
            <MapboxGL.PointAnnotation
              id="selectedLocation"
              coordinate={selectedLocation}
            />
          )}

          <MapboxGL.Camera
            zoomLevel={5}
            centerCoordinate={coordinatesSa}
          />
          <MapboxGL.Camera
            zoomLevel={5}
            centerCoordinate={coordinatesMo}
          />
          <MapboxGL.Camera
            zoomLevel={5}
            centerCoordinate={coordinatesBl}
          />
          <MapboxGL.PointAnnotation coordinate={coordinatesSa} />
          <MapboxGL.PointAnnotation coordinate={coordinatesMo} />
          <MapboxGL.PointAnnotation coordinate={coordinatesBl} />

        </MapboxGL.MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  map: {
    flex: 1
  },


});

export default Map;