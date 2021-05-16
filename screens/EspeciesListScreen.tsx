import { observer, useLocalStore } from "mobx-react";
import React, { useCallback, useEffect } from "react";
import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import ThemedStyles from "../styles/ThemedStyles";
import ItemEspecie from "../components/ItemEspecie";
import { SearchBar } from "react-native-elements";
import queryManager from "../managers/QueryManager";
import { arboles, hierbas } from "../constants/Images";
import debounce from "../helpers/debounce";
import { especie } from "../types";
import { useNavigation } from "@react-navigation/native";

const createEspeciesListStore = () => {
  const store = {
    loading: false,
    offset: 0,
    limit: 6,
    canLoadMore: true,
    search: "",
    searching: false,
    setSearch(search: string) {
      this.search = search;
      if (this.search === "") {
        this.clean();
      }
      this.getEspeciesDebounce();
    },
    especies: [] as Array<especie>,
    setEspecies(especies: Array<especie>) {
      if (especies.length > 0) {
        this.especies = [...this.especies, ...especies];
        this.offset += this.limit;
      } else {
        this.canLoadMore = false;
      }
      this.loading = false;
    },
    getEspeciesDebounce() {
      console.log("getEspeciesDebounce");
      const me = this;
      me.loading = true;
      debounce(() => {
        console.log("debounce");
        if (me.search === "") {
          queryManager.getAll(me.setEspecies, me.offset, me.limit);
        } else {
          me.clean();
          queryManager.getByNombre(
            me.search,
            me.setEspecies,
            me.offset,
            me.limit
          );
        }
      }, 700)();
    },
    getEspecies(loadMore = false) {
      this.loading = true;
      if (this.search === "") {
        queryManager.getAll(this.setEspecies, this.offset, this.limit);
      } else {
        if (!loadMore) {
          this.clean();
        }
        queryManager.getByNombre(
          this.search,
          this.setEspecies,
          this.offset,
          this.limit
        );
      }
    },
    clean() {
      this.especies = [];
      this.offset = 0;
      this.canLoadMore = true;
    },
    loadMore() {
      if (this.canLoadMore && !this.loading) {
        this.getEspecies(true);
      }
    },
  };
  return store;
};

const EspeciesListScreen = observer(({ route }: any) => {
  const theme = ThemedStyles.style;
  const store = useLocalStore(createEspeciesListStore);
  const navigator = useNavigation();

  const especies = route?.params?.especies || false;

  useEffect(() => {
    if (especies) {
      store.setEspecies(especies);
    } else {
      store.getEspecies();
    }
  }, []);

  const header = !especies && (
    <SearchBar
      placeholder="Nombre vulgar"
      onChangeText={store.setSearch}
      value={store.search}
      style={styles.searchBarBackground}
      containerStyle={[
        styles.searchBarBackground,
        theme.borderBottom0x,
        theme.borderTop0x,
      ]}
      inputContainerStyle={styles.searchBarBackground}
    />
  );

  const _renderItem = useCallback(
    ({ item }: { item: especie }) => (
      <ItemEspecie
        especie={item}
        avatarSource={
          item.libro === "arboles"
            ? arboles[item.id].img1
            : hierbas[item.id].img1
        }
        onPress={() =>
          navigator.navigate("EspeciesDetailScreen", { especie: item })
        }
      />
    ),
    [navigator]
  );

  const onEndReached = especies ? undefined : store.loadMore;

  return (
    <View style={theme.flexContainer}>
      <ImageBackground
        resizeMode={"repeat"}
        source={require("../assets/images/leaves.png")}
        style={styles.image}
      >
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={(item: especie, index: number) =>
              `${item.libro}${item.id.toString()}`
            }
            data={store.especies.slice()}
            renderItem={_renderItem}
            ListHeaderComponent={header || undefined}
            onEndReached={onEndReached}
            refreshing={store.loading}
          />
        </View>
      </ImageBackground>
    </View>
  );
});

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: "90%",
    backgroundColor: "white",
    marginTop: 15,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  searchBarBackground: {
    backgroundColor: "white",
  },
});

export default EspeciesListScreen;
