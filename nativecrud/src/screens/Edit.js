import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Edit = ({route}) => {

    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("http://10.0.2.2:8080/")
        .then(res => {
            setData(res.data)
            setValues({...values, name: res.data[1].name, email: res.data[1].emai})
        })
        .catch(err => console.log(err))
    },[])

    const [values, setValues] = useState({
        name: '',
        email: ''
    }) 

  return (
    <View style={{
        alignItems: 'center'
    }}>
        <View style={{
            marginTop: 250,
            borderWidth: 2,
            padding: 10,
            width: '80%'
        }}>
            <Text style={{
                color: 'black',
                alignSelf: 'center',
                fontWeight: '500',
                fontSize: 23
            }}>Update Student</Text>
            <View>
                <TextInput 
                placeholder='Enter Name' 
                value={values.name}
                onChangeText={(text) => ('name', text)}
                style={{
                    borderWidth: 2,
                    marginTop: 15,
                }}/>
                <TextInput 
                placeholder='Enter Email' 
                keyboardType='email-address'
                value={values.email}
                onChangeText={(text) => ('emai', text)}
                style={{
                    borderWidth: 2,
                    marginTop: 5
                }}/>
            </View>
            <TouchableOpacity
            onPress={()=>{
                // handelSubmit();
                // navigation.navigate("HomeScreen")
            }} 
            style={{
                alignSelf: 'center',
                marginTop: 15,
                borderWidth: 2,
                padding: 10,
                width: '80%',
                borderRadius: 5,
                backgroundColor: '#148545'
            }}>
                <Text style={{
                    alignSelf: 'center',
                    fontSize: 17,
                    color: 'white',
                    fontWeight: 500
                }}>
                    Update
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Edit