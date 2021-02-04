import React from 'react'
import {StyleSheet,Image, View,Text,Button, TextInput, FlatList, Dimensions } from 'react-native'
import { getImageFilm } from '../API/TMDBApi'
class FilmItem extends React.Component{
 
    render(){
        const film= this.props.film
        return (
            <View style={ styles.container} >
                     <Image
                        resizeMode="cover"
                       style = { styles.image }
                       source= {{uri: getImageFilm(film.poster_path)}}
                     />
                    <View 
                    style = { styles.app }
                    >
                      <Text style={ styles.title } numberOfLines={6}>{film.title }</Text>
                      <Text style={ styles.date }>{film.release_date }</Text>
                    </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    image : {
        flex:2
    },
    title : {
        color: "white",
        fontSize : 20
    },
    date : {
        fontSize : 12
    },
    container : {
        height : 300,
        borderRadius : 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
        margin :"2%",
        width : "46%",
        backgroundColor : "#92302d"
    },
    app : {
        flex : 1,
        margin : 5
    }
})

export default FilmItem