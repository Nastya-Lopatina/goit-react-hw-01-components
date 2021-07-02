import React from 'react';
import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory  from './components/TransactionHistory/TransactionHistory'

//Компоненты
import friends from './components/FriendList/friends.json';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json'
import transactions from './components/TransactionHistory/transactions.json'

const App = () => (
<>
<Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={statisticalData} />;
<FriendList friends={friends} />,
<TransactionHistory items={transactions} />;  
</>
);



export default App;
