import { View, Text, FlatList, TouchableOpacity} from 'react-native'
import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'

const HomeScreen = ({navigation}) => {
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get("http://10.0.2.2:8080/")
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])

    const renderItem = ({item}) =>(
        <View style={{
            borderBottomWidth: 2,
            borderColor: 'black',
            padding: 5,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
        <View>
            <Text>Id: {item.id}</Text>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.emai}</Text>
        </View>
        <View>
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate("Edit",{"id":item.id})
            }} 
            style={{
                marginTop: 7,
                borderWidth: 1,
                padding: 5,
                borderRadius: 5,
                backgroundColor: '#3495eb'
            }}>
                <Text style={{
                    color: 'white'
                }}>
                    Edit
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                marginTop: 7,
                borderWidth: 1,
                padding: 5,
                borderRadius: 5,
                backgroundColor: '#cc0a0a'
            }}>
                <Text style={{
                    color: 'white'
                }}>
                    Delete
                </Text>
            </TouchableOpacity>
        </View>
        </View>
    )
  return (
    <View style={{
        borderWidth: 2,
        borderColor: 'black',
        width: "80%",
        alignSelf: 'center',
        marginTop: 20,
        padding: 10
    }}>
        <View style={{
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 30,
                borderBottomWidth: 2,
                borderColor: 'black',
                color: 'black',
                fontWeight: '500'
            }}>
                Student List
            </Text>
        </View>
        <FlatList 
        style={{
            marginLeft: 10,
            marginTop: 10,
        }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item)=>item.id.toString()}
        />
        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate("Create")
        }}
        style={{
            alignItems: 'center',
            marginTop: 10,
            padding: 12,
            borderWidth: 2,
            width: '80%',
            alignSelf: 'center',
            borderRadius: 5,
            backgroundColor: '#148545'
        }}>
            <Text style={{
                color: 'white',
                fontSize: 17
            }}>
                Create +
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen