import React from 'react';
import style from './friends.module.css';
import PropTypes from 'prop-types';

const FriendList = ({friends}) => (
    <ul className={style.friend_list}>

        {friends.map((friend) => (
           
           <li className={style.item} key={friend.id}>
                <span className = {friend.isOnline ? style.statusOnline : style.statusOffline}>

               </span>

                <img className={style.avatar} 
                src={friend.avatar} 
                alt="" 
                width="50" />

                <p className={style.name}>{friend.name}</p>

           </li>
        ))}
  
</ul> 
)

FriendList.propTypes = {
friends: PropTypes.arrayOf(
    PropTypes.shape({
        avatar:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        isOnline:PropTypes.bool.isRequired,
        id:PropTypes.number.isRequired}).isRequired
).isRequired
}

export  default  FriendList;