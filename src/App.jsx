import React from 'react'
import Card from './Card';

function App() {

  const dataset = [
    {
      id: "card1",
      imageURL: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1vdW50YWlufGVufDB8fHx8MTY5Mjc4Mjk2MQ&ixlib=rb-1.2.1&q=80&w=400",
      caption: "Beautiful mountain landscape"
    },
    {
      id: "card2",
      imageURL: "https://images.unsplash.com/photo-1663640397122-d50df280b1db?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Serene lake view"
    },
    {
      id: "card3",
      imageURL: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHN1bnNldHxlbnwwfHx8fDE2OTI3ODI5NjE&ixlib=rb-1.2.1&q=80&w=400",
      caption: "Sunset over the ocean"
    },
    {
      id: "card4",
      imageURL: "https://images.unsplash.com/photo-1548437983-5d3c209764a1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "City skyline at night"
    },
    {
      id: "card5",
      imageURL: "https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZvcmVzdHxlbnwwfHx8fDE2OTI3ODI5NjE&ixlib=rb-1.2.1&q=80&w=400",
      caption: "Forest path in autumn"
    },
    {
      id: "card6",
      imageURL: "https://images.unsplash.com/photo-1635058801600-9db79aff5ccc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Snow-covered mountain peaks"
    },
    {
      id: "card7",
      imageURL: "https://images.unsplash.com/photo-1631261178062-83006e6256f3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Desert dunes under a blue sky"
    },
    {
      id: "card8",
      imageURL: "https://images.unsplash.com/photo-1605325811474-ba58cf3180d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Calm beach with palm trees"
    },
    {
      id: "card9",
      imageURL: "https://images.unsplash.com/photo-1498015583783-4abcab4a760a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Night sky full of stars"
    },
    {
      id: "card10",
      imageURL: "https://images.unsplash.com/photo-1698678165255-735ab27a611a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Green meadow with flowers"
    }
  ];
  
  
  return (
    <div className='h-screen overflow-auto w-screen bg-zinc-800 p-20 flex gap-10 flex-wrap'>
      
      {dataset.map((elem,index)=>{
        return (
          <Card key={index} elem={elem}/>
        )
      })}
     
      
    </div>
  )
}

export default App