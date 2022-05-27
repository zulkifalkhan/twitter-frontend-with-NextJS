import React from 'react'
import Post from "../Post"


const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }

const tweets = [
    {
        displayName:'Zulkifal',
        userName:'0x12121212121212', //walet address
        avatar:'https://mdbootstrap.com//img/Photos/Square/1.jpg',
        text:'hello',
        isProfileImageNft:true,
        timestamp:'2022-06-01T12:00:00.000Z'
    },
    {
      displayName:'Zulkifal',
      usernName:'0x121212512121212', //walet address
      avatar:'https://mdbootstrap.com//img/Photos/Square/1.jpg',
      text:'hello',
      isProfileImageNft:false,
      timestamp:'2019-06-01T12:00:00.000Z'
  },
  {
      displayName:'Zulkifal',
      userName:'0x121212121231212', //walet address
      avatar:'https://mdbootstrap.com//img/Photos/Square/1.jpg',
      text:'hello',
      isProfileImageNft:false,
      timestamp:'2021-06-01T12:00:00.000Z'
  },
  {
      displayName:'Zulkifal',
      userName:'0x121212142121212', //walet address
      avatar:'https://mdbootstrap.com//img/Photos/Square/1.jpg',
      text:'hello',
      isProfileImageNft:false,
      timestamp:'2022-02-01T12:00:00.000Z'
  },
  ]



const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
        {tweets?.map((tweet,index)=>(
            <Post 
            key={index}
            displayName={tweet.displayName}
            // userName={`${tweet.userName.slice(0,4)}...${tweet.userName
            // -4}`}
            userName={tweet.userName}
            avatar={tweet.avatar}
            text={tweet.text}
            isProfileImageNft={tweet.isProfileImageNft}
            timestamp={tweet.timestamp}
            />
        ))}
    </div>
  )
}

export default ProfileTweets