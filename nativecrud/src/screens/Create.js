import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import axios from 'axios'

const Create = ({navigation}) => {
    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const handelSubmit = () =>{
        axios.post("http://10.0.2.2:8080/crud",values)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    const handleInputChange = (name, text) => {
        setValues({
          ...values,
          [name]: text,
        });
      };

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
            }}>Add Student</Text>
            <View>
                <TextInput 
                placeholder='Enter Name' 
                value={values.name}
                onChangeText={(text) => handleInputChange('name', text)}
                style={{
                    borderWidth: 2,
                    marginTop: 15,
                }}/>
                <TextInput 
                placeholder='Enter Email' 
                keyboardType='email-address'
                value={values.email}
                onChangeText={(text) => handleInputChange('email', text)}
                style={{
                    borderWidth: 2,
                    marginTop: 5
                }}/>
            </View>
            <TouchableOpacity
            onPress={()=>{
                handelSubmit();
                navigation.navigate("HomeScreen")
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
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Create