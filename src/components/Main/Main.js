import React, {Component} from 'react';
import { fetchCharacters, showMore, showLess } from '../../actions/characterActions';
import { connect } from 'react-redux';
import styles from './mainStyles';
import Image from '../../shared/components/Image/Image';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    ActivityIndicator,
    FlatList,
  } from 'react-native';
  
class Main extends Component {
  componentDidMount() {
    this.props.fetchCharacters();
  };

  load = (character) => {
    this.props.showMore(character);
  };

  unLoad = () => {
    this.props.showLess();
  };

  render() {
    const { characters, isLoading, loadingCharactersError, loadMore, characterToLoad } = this.props;
    return(
      <>
        { isLoading
          ? <View style={styles.loaderContainer}><ActivityIndicator size="large" /></View>
          : loadingCharactersError
            ? <View style={styles.loaderContainer}><Text style={styles.highlight}>Something went wrong</Text></View>
            : <>
              <StatusBar barStyle="dark-content" />
              <SafeAreaView>
                  <FlatList
                    contentContainerStyle={{backgroundColor: '#000000'}}
                    ListHeaderComponent={() => (<View style={styles.titleContainer}><Image type="logo" style="logo" mode="contain" /></View>)}
                    data={characters}
                    renderItem={({ item: character }) => (
                      <View style={styles.sectionContainer}>
                        <View style={styles.card}>
                          <Image type={character.name} style="card" mode="cover" />
                        </View>
                        <View style={styles.infoContainer}>
                          { loadMore && character.name === characterToLoad
                            ?
                            <>
                              <Text style={styles.sectionTitle}>{character.name}</Text>
                              <Text style={styles.sectionDescription}>
                                {`Height: `}
                                <Text style={styles.highlight}>{character.height}</Text>
                              </Text>
                              <Text style={styles.sectionDescription}>
                                {`Mass: `}
                                <Text style={styles.highlight}>{character.mass}</Text>
                              </Text>
                              <Text style={styles.sectionDescription}>
                                {`Hair color: `}
                                <Text style={styles.highlight}>{character.hair_color}</Text>
                              </Text>
                              <Text style={styles.sectionDescription}>
                                {`Skin color: `}
                                <Text style={styles.highlight}>{character.skin_color}</Text>
                              </Text>
                              <Text style={styles.sectionDescription}>
                                {`Eye color: `}
                                <Text style={styles.highlight}>{character.eye_color}</Text>
                              </Text>
                              <Text style={styles.sectionDescription}>
                                {`Date of birth: `}
                                <Text style={styles.highlight}>{character.birth_year}</Text>
                              </Text>
                              <Text style={styles.sectionDescription}>
                                {`Gender: `}
                                <Text style={styles.highlight}>{character.gender}</Text>
                              </Text>
                              <Text onPress={ this.unLoad } style={styles.more}>...</Text>
                            </>
                            : <View style={styles.moreContainer}><Text style={styles.sectionTitle}>{character.name}</Text><Text onPress={ () => this.load(character.name) } style={styles.more}>...</Text></View>
                          }
                        </View>
                      </View>
                    )}
                    keyExtractor={character => character.height}
                  />
              </SafeAreaView>
            </>
        }   
      </>
    );
  };
};

const mapStateToProps = state => ({
  characters: state.characters.characters,
  isLoading: state.characters.isLoading,
  loadingCharactersError: state.characters.error,
  loadMore: state.characters.loadMore,
  characterToLoad: state.characters.characterToLoad,
});

const mapDispatchToProps = {
  fetchCharacters,
  showMore,
  showLess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);