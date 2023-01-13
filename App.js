
import React, {useState} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Header from "./src/Header/header";
import List from "./src/List";

export default function App(){

  const [feed, setFeed] = useState([
    {
      id: '1', 
      nome: 'Lucas Silva', 
      descricao: 'Mais um dia de muitos bugs :)', 
      imgperfil: 'https://www.thiagofrovere.com.br/instareact/fotoPerfil1.png', 
      imgPublicacao: 'https://www.thiagofrovere.com.br/instareact/foto1.png',  
      likeada: true, 
      likers: 1
     },
    {
      id: '2', 
      nome: 'Matheus', 
      descricao: 'Isso sim é ser raiz!!!!!', 
      imgperfil: 'https://www.thiagofrovere.com.br/instareact/fotoPerfil2.png', 
      imgPublicacao: 'https://www.thiagofrovere.com.br/instareact/foto2.png', 
      likeada: false, 
      likers: 0
    },
    {
      id: '3', 
      nome: 'Jose Augusto', 
      descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend', 
      imgperfil: 'https://www.thiagofrovere.com.br/instareact/fotoPerfil3.png', 
      imgPublicacao: 'https://www.thiagofrovere.com.br/instareact/foto3.png',  
      likeada: false, 
      likers: 55
    },
    {
      id: '4', 
      nome: 'Gustavo Henrique', 
      descricao: 'Isso sim que é TI!', 
      imgperfil: 'https://www.thiagofrovere.com.br/instareact/fotoPerfil1.png', 
      imgPublicacao: 'https://www.thiagofrovere.com.br/instareact/foto4.png', 
      likeada: false, 
      likers: 1
    },
    {
      id: '5', 
      nome: 'Guilherme', 
      descricao: 'Boa tarde galera do insta...', 
      imgperfil: 'https://www.thiagofrovere.com.br/instareact/fotoPerfil2.png', 
      imgPublicacao: 'https://www.thiagofrovere.com.br/instareact/foto5.png',
      likeada: false, 
      likers: 32
    }
  ])



  return(
    <View style={styles.containerPrincipal}>
      <Header/>

      <FlatList
        data={feed}
        renderItem={ ({item}) => <List data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerPrincipal:{
    flex: 1,
  }
})