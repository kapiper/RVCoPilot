import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

function RVSiteScreen () {

  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params || {};
  console.log("Item on RV Screen", item);

  const siteData = item;

  if (!siteData) {
    return <ErrorMessage message="RV site data is not available." />;
  };

  const goToRVSiteListScreen = () => {
    navigation.navigate('RVSiteListScreen');
  };

  const goToHomeScreen = () => {
    navigation.navigate('HomeScreen');
  }

  const goToEditRVSiteScreen = (item) => {
    navigation.navigate('EditRVSiteScreen',{ item: item });
  }

  return (

    <View style={{flex:1, backgroundColor: '#e0e0e1'}}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10, marginTop: 10}}>
          
          <TouchableOpacity style={[styles.homeButton] } onPress={goToRVSiteListScreen}>
              <Text>Back to Site</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.homeButton } onPress={goToHomeScreen}>
              <Text>Return Home</Text>
          </TouchableOpacity>

      </View>
    
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', overflow:'scroll' }}>

          <Text style={styles.title}>{siteData.SiteName}</Text>


          <ScrollView style={{paddingHorizontal: 20, flex:1}}>
            
            <View style={styles.item}>
              <Text style={styles.textRVSite}>Site Id: {siteData.id} </Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.textRVSite}>Site Description: {siteData.SiteDescription} </Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.textRVSite}>Coordinates: {siteData.SiteLatitude}, {siteData.SiteLongitude} </Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.textRVSite}>RV Electric Access: {siteData.RVElectricAccess !== undefined ? (siteData.RVElectricAccess ? 'Yes' : 'No') : 'Data Not Available'}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.textRVSite}>Water Access: {siteData.WaterAccess !== undefined ? (siteData.WaterAccess ? 'Yes' : 'No') : 'Data Not Available'}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.textRVSite}>Wifi Access: {siteData.WifiAccess !== undefined ? (siteData.WifeAccess ? 'Yes' : 'No') : 'Data Not Available'}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.textRVSite}>Cell Service: {siteData.CellService !== undefined ? (siteData.CellService ? 'Yes' : 'No') : 'Data Not Available'}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.textRVSite}>Pets Allowed: {siteData.PetsAllowed !== undefined ? (siteData.PetsAllowed ? 'Yes' : 'No') : 'Data Not Available'}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.textRVSite}>Recreation: {siteData.RVElectricAccess !== undefined ? siteData.Recreation : 'Data Not Available'}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.textRVSite}>Site Rating: {siteData.SiteRating !== undefined ? siteData.SiteRating : 'Data Not Available'}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.textRVSite}>User Comments:</Text>
              {siteData.Comments !== undefined ? (
                siteData.Comments.map((comment, index) => (
                  <View key={index}>
                    <Text style={styles.textRVSite}>{comment.user}: {comment.comment}</Text>
                  </View>
                ))
              ) : (
                <Text>Data Not Available</Text>
              )}
            </View>

          </ScrollView>
      </View>

      <View style={{margin:15}}>
        <Button title="Edit RV Site" style={{padding:10, marginBottom:10}} onPress={() => goToEditRVSiteScreen(item)} />
      </View>
    
    </View>

    );
  }

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#3e4272',
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 6,
    borderRadius: 5,
  },
  title: {
    fontSize: 22,
    padding: 10,
    marginTop: 15,
    color: '#899499'
  },
  textRVSite: {
    color:'#ecd9c4',
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    marginTop: 10,
    },
  container: {
    boxSizing: 'border-box',
    width: '85%',
    aspectRatio: .8,
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    padding: 5,
    background: '#D9D9D9',
    borderWidth: 1,
    borderColor: '#AFAFAF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
  },
  homeButton: {
    width: 126,
    height: 35,
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderColor: '#AFAFAF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15
  },

  buttonText: {
    fontFamily: 'MarkoOne-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 32,
    textAlign: 'center',
    color: '#000000',
  },
  middleBottom: {
    position: 'absoulte', 
    bottom: 5
  }
});
    
export default RVSiteScreen;