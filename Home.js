import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Header from "./Header"
import Box from "./Box"

const Home = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Header>
                <Text style={{ marginBottom: 20}}>Home</Text>
            </Header>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Box>
                    <Text>Home</Text>
                </Box>
                <Box>
                    <Text>Home</Text>
                </Box>
                <Box>
                    <Text>Home</Text>
                </Box>
            </View>
        </View>
    )
}

export default Home;