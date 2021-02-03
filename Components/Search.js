import React from 'react'
import films from '../Helpers/filmsData'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
import {StyleSheet, View,Text,Button, TextInput, FlatList } from 'react-native'
class Search extends React.Component{
     
    constructor(props){
        super(props)
        this.state= { 
            films : [],
            searchedText :""
         }
    }

    _loadFilms(text){
        if(text.length!=""){
         getFilmsFromApiWithSearchedText(text).then(data=> this.setState({films : data.results}))

        }
        else{
            this.setState({ films : []})
        }
        
    }
    render(){
        return (
            <View style={styles.main_container}>
                    <View style={styles.container_search}>
                        <TextInput placeholder="Titre du film" style={styles.text_search} onChangeText= {(text)=>this._loadFilms(text)}/>
                    </View>
                    <FlatList
                        data = {this.state.films}
                        keyExtractor = {(item)=> item.id.toString()}
                        renderItem = { ({item}) =>  <Text>{item.title}</Text>}
                    />
                    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container_search: {
        backgroundColor : '#fff',
        borderRadius : 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 5,
        margin: 6


    },
    main_container: {
        flex :1
    },
    text_search:{
        padding: 6
    },
    button_search : {
        with: 5
    }
})
export default Search