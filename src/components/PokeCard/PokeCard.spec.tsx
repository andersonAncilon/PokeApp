import React from 'react'
import PokeCard from './PokeCard'
import { ShallowWrapper, shallow } from 'enzyme'

const props: IPokeCard = {
  pokemonImage: 'src',
  pokemonTypes: ['Water', 'Fire'],
  pokemonTypesImages: ['src', 'src'],
  pokemonName: 'Pikachu',
  navigation: {
    navigate: jest.fn(),
  },
}

describe('PokeCard Rendering', () => {
  let wrapper: ShallowWrapper

  beforeAll(() => {
    wrapper = shallow(<PokeCard {...props} />)
  })

  test('Should render container', () => {
    const container = wrapper.find("[data-test='container']")

    expect(container).toHaveLength(1)
  })

  test('Should render pokemon image', () => {
    const pokemonImage = wrapper.find("[data-test='pokemonImage']")

    expect(pokemonImage).toHaveLength(1)
  })

  test('Should render pokemons types images', () => {
    const pokemonTypeImage = wrapper.find("[data-test='pokemonTypeImage']")

    expect(pokemonTypeImage).toHaveLength(2)
  })

  test('Should render pokemon name', () => {
    const pokemonName = wrapper.find("[data-test='pokemonName']")

    expect(pokemonName).toHaveLength(1)
  })

  test('Should render pokemon type name', () => {
    const pokemonTypeName = wrapper.find("[data-test='pokemonTypesNames']")

    expect(pokemonTypeName).toHaveLength(1)
  })
})

describe('PokeCard Behaviors', () => {
  beforeAll(() => {
    const wrapper: ShallowWrapper = shallow(<PokeCard {...props} />)
    const pokeCard = wrapper.find("[data-test='container']")

    pokeCard.simulate('click')
  })
  test('Should navigate to pokemon details page', () => {
    expect(props.navigation.navigate).toBeCalled()
  })
})
