import React from 'react'
import './output.css'
import logoFollowers from './img/followers.png'

export default function Output({data}) {
    return (
        <div className='mainProfile'>
        
        <div className='user-profile' >
            { data ?
                <>
                    <img className='prof-userImg' src={data.avatar_url} />
                    <p className='prof-userName'> {data.name}</p>
                    <p className='prof-userLogin'> {data.login}</p>
                    <p className='prof-userBio'> {data.bio}</p>

                    <div className='profile-follow'>
                        <img className='logoFollowers' src={logoFollowers} />
                        <p className='followersLength'>{data.followers} followers · </p>
                        <p className='followingLength'> {data.following} following </p>
                    </div>
                </>   
                :<h3></h3>
            }
        </div>
            

        </div>
    )
}
