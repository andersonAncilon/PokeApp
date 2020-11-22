import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

const PokeCard = (props: IPokeCard): JSX.Element => {
  const {
    pokemonImage,
    pokemonName,
    pokemonTypes,
    pokemonTypesImages,
    navigation,
  } = props
  return (
    <TouchableOpacity
      data-test="container"
      onPress={navigation.navigate('teste')}
    >
      <View>
        <Image source={pokemonImage} data-test="pokemonImage" />
        <View>
          {pokemonTypesImages.map((item, index) => (
            <View key={index} data-test="pokemonTypeImage">
              <Image source={item} />
            </View>
          ))}
        </View>
        <Text data-test="pokemonTypesNames">{pokemonTypes.join(' / ')}</Text>
        <Text data-test="pokemonName">{pokemonName}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PokeCard
