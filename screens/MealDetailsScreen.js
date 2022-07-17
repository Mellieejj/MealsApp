import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import List from '../components/MealDetail/List';
import SubTitle from '../components/MealDetail/SubTitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails 
        complexity={selectedMeal.complexity} 
        affordability={selectedMeal.affordability} 
        duration={selectedMeal.duration} 
        textStyle={styles.detailText}
      />
      
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients} />

          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>

      </View>
      
    </ScrollView>
  )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailText: {
    color: 'white'
  },
  listContainer: {
    maxWidth: '80%'
  },
  listOuterContainer: {
    alignItems: 'center'
  }
 
});