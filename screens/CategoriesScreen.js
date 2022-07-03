import { View, FlatList } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = () => {

    return (
        <View>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => <CategoryGridTile title={itemData.item.title} color={itemData.item.color} /> } 
                numColumns={2}
            />
        </View>
    )
}

export default CategoriesScreen;