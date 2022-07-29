import { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import SubTitle from '../components/MealDetail/SubTitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
//context
// import {useContext} from 'react'
// import { FavoritesContext } from '../store/context/favorites-context';

const MealDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  
  // context
  // const favoriteMealsCtx = useContext(FavoritesContext);
  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  
  //redux 
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const changeFavoriteStatusHandler = () => {
   // context
    // if(mealIsFavorite){
    //   favoriteMealsCtx.removeFavorite(mealId);
    // } else {
    //   favoriteMealsCtx.addFavorite(mealId);
    // }

    //redux
    if (mealIsFavorite){
      dispatch(removeFavorite({id: mealId}))
    } else {
      dispatch(addFavorite({id: mealId}))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton 
                  onPress={changeFavoriteStatusHandler} 
                  icon={mealIsFavorite ? 'star' : 'star-outline'} 
                  color='white'
                />
      }
    })
  },[navigation, changeFavoriteStatusHandler]);

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