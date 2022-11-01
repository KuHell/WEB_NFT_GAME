import React from 'react';
import { useState } from 'react';
import { PageHOC, CustomInput, CustomButton } from '../components';
import { GlobalContextProvider, useGlobalContext } from '../context';

const Home = () => {
  const {contract, walletAddress} = useGlobalContext();
  const [playerName, setPlayerName] = useState('');
  return (
    <div className="flex flex-col">
      <CustomInput 
        label="Name"
        placeholder="Enter your player name"
        value={playerName}
        handleValueChange={setPlayerName}
      />

      <CustomButton 
        title="Register"
        handleClick={()=>{}}
        restStyles='mt-6'
      />
    </div>
  )
};

export default PageHOC(Home,
  <>Welcome to Avax Gods <br /> a Web3 NFT Card Game</>,
  <>connect your wallet to start playing <br /> the ultimate Web3 Battle Card Game</>
  );