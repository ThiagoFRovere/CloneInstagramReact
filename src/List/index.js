import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function List(props){

  function carregaIcone(likeada){
    return likeada ? require('../img/likeada.png') : require('../img/like.png')
  }
  function mostrarlikes(likers){
    if(likers === 0){
      return;
    }
    return(
      <Text style={styles.likes}>{likers} {likers >1 ? 'curtidas' : 'curtida'}</Text>
    );
  }

  return(
    <View>
        <View style={styles.viewPerfil}>
          <Image
            source={{uri: props.data.imgperfil}}
            style={styles.fotoPerfil}
          />
          <Text style={styles.nomeUsuario}> {props.data.nome} </Text>
        </View>
        
        <View>
          <Image
            resizeMode= "cover"
            source={{uri: props.data.imgPublicacao}}
            style={styles.imgPublicacao}
          />
        </View>

        <View style={styles.areaBtn}>
          <TouchableOpacity>
            <Image
              source={carregaIcone(props.data.likeada)}
              style={styles.iconeLike}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../img/comment.png')}
              style={styles.iconeComment}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../img/send.png')}
              style={styles.iconeSend}
            />
          </TouchableOpacity>

        </View>

        {mostrarlikes(props.data.likers)}

        <Text style={styles.nome}>{props.data.nome}</Text>
        <Text style={styles.descricao}>{props.data.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPerfil:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },  
  fotoPerfil:{
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nomeUsuario:{
    paddingLeft: 5,
    fontSize: 22,
    color: '#000',
  },
  imgPublicacao:{
    height: 400,
    alignItems: 'center',
  },
  areaBtn:{
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    
  },
  iconeLike:{
    width: 25,
    height: 25,
    marginRight: 15,
  },
  iconeComment:{
    width: 25,
    height: 25,
    marginRight: 15,
  },
  iconeSend:{
    width: 25,
    height: 25,
  },
  likes:{
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 5,
    
  },
  nome:{
    marginLeft: 10,
    fontWeight: '600',
    marginBottom: 5,
    fontSize: 17,
  },
  descricao:{
    marginLeft: 10,
    fontWeight: '600',
    marginBottom: 15,
  },

})