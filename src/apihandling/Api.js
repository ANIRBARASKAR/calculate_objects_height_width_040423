import React,{useState} from 'react'
import axios from "axios"
export default function Api() {

    const url = "https://dev.agere.games/api/casinos/currency-address?token=10903fb52ff44de19678b1fcf74a8985&casino=a4b5ccf9294bc39459b8154f990e09a6&remoteId=https://casinoterra.io/_1681889846806&authKey=2385c4bb57aa6b2f4b7c928c45b0eed23f0f4f83"

    const test = async () => {

        const {data} = await axios.get(url)

        console.log("data",data.data); 


    
    }
    test()
  return (
    <div>Api</div>
  )
}
