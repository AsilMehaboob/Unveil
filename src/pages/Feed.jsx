import React from 'react'
import './Feed.css'
import ConfessionCard from '../component/ConfessionCard'
import { useState,useEffect } from 'react'
import {app} from "../firebase"
import { getFirestore, collection, getDocs,query,orderBy } from 'firebase/firestore'
const feed = () => {

  const [data, setData] = useState([])

  const db = getFirestore(app)
  const q=query(collection(db,"confessions"),orderBy("date","desc"))
  useEffect(() => {
    const dataFetch = async() =>{
      const confessions=[]
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc)=>{
        confessions.push({id: doc.id, ...doc.data()})
      

      })
      setData(confessions)

      

    }
    dataFetch();
    console.log(data)
  

  }, [])
  return (
    <div className='feed'>
      {data.map((confession,index) =>(
        console.log(confession),
        (<ConfessionCard key={index}
          confession={confession}
          />)
      ))}
    </div>
  );
};

export default feed

