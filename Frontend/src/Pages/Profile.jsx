import React from 'react'
import { ProfileBar } from '../Components/Profile/ProfileBar'
import { PostsContainer } from '../Components/Profile/PostsContainer'

export const Profile = () => {

    return (
        <>
        <div className='bg-black'>
        <ProfileBar />
            <hr />
            <br />
            <PostsContainer />
        </div>
          
        </>
    )
}