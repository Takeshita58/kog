
import { useState, useEffect } from 'react'
import Web3 from 'web3'
import { createCanvas,loadImage } from 'canvas';
import ReactDOM from "react-dom"



function App() {
  const [shortAddress, setShortAddress] = useState(null);
  const [connect, setConnect] = useState(false);
  const [defaultAccount, setDefaiultAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const mintState =  ["OG Mint", "PV1", "PV2", "Public Mint"];

  //canvas
  const mouth = [
    {fileName: './image/01_mouth_A.png', ratio: 1.0},
    {fileName: './image/01_mouth_B.png', ratio: 1.1},
    {fileName: './image/01_mouth_C.png', ratio: 2.0},
    {fileName: './image/01_mouth_D.png', ratio: 2.4},
    {fileName: './image/01_mouth_E.png', ratio: 3.0},
    {fileName: './image/01_mouth_F.png', ratio: 3.4},
    {fileName: './image/01_mouth_G.png', ratio: 4.0},
    {fileName: './image/01_mouth_H.png', ratio: 5.0},
  ]

  const hair = [
    {fileName: './image/02_hair_A.png', ratio: 1.0},
    {fileName: './image/02_hair_B.png', ratio: 1.1},
    {fileName: './image/02_hair_C.png', ratio: 2.0},
    {fileName: './image/02_hair_D.png', ratio: 2.8},
    {fileName: './image/02_hair_E.png', ratio: 3.2},
    {fileName: './image/02_hair_F.png', ratio: 3.4},
    {fileName: './image/02_hair_G.png', ratio: 4.0},
    {fileName: './image/02_hair_H.png', ratio: 5.0},
    {fileName: './image/02_hair_I.png', ratio: 5.1},
  ]

  const eye = [
    {fileName: './image/03_eye_A.png', ratio: 4.0},
    {fileName: './image/03_eye_B.png', ratio: 4.1},
    {fileName: './image/03_eye_C.png', ratio: 4.3},
    {fileName: './image/03_eye_D.png', ratio: 4.5},
    {fileName: './image/03_eye_E.png', ratio: 4.7},
    {fileName: './image/03_eye_F.png', ratio: 5.0},
    {fileName: './image/03_eye_G.png', ratio: 5.0},
    {fileName: './image/03_eye_H.png', ratio: 5.0},
    {fileName: './image/03_eye_I.png', ratio: 5.0},
  ]

  const fuku = [
    {fileName: './image/04_fuku_A.png', ratio: 3.0},
    {fileName: './image/04_fuku_B.png', ratio: 3.1},
    {fileName: './image/04_fuku_C.png', ratio: 3.5},
    {fileName: './image/04_fuku_D.png', ratio: 5.0},
    {fileName: './image/04_fuku_E.png', ratio: 5.0},
  ]

  const moji = [
    {fileName: './image/05_moji_A.png', ratio: 3.1},
    {fileName: './image/05_moji_B.png', ratio: 3.2},
    {fileName: './image/05_moji_C.png', ratio: 3.3},
    {fileName: './image/05_moji_D.png', ratio: 4.1},
    {fileName: './image/05_moji_E.png', ratio: 4.2},
    {fileName: './image/05_moji_F.png', ratio: 4.3},
    {fileName: './image/05_moji_G.png', ratio: 5.1},
    {fileName: './image/05_moji_H.png', ratio: 5.2},
    {fileName: './image/05_moji_I.png', ratio: 5.3},
  ]

  const [context,setContext] = useState(null)
  const [loaded, setLoaded] = useState(false)
  let imgList = []
  let partsUrlList = [];
  let loadedCounter = 0
  const display = async() =>{
    await Promise.all(imgList.map(async(item,index)=>{
      await context.drawImage(item,0,0)
    }))
  }

  const loadimage = async() => {
    let imgObj = new Image()
    imgObj.onload = async()=>{
      loadedCounter++;
      imgList.push(imgObj)
      if(partsUrlList.length == loadedCounter){
        await display()
        partsUrlList = []
        loadedCounter = 0
        setLoaded(true)
      }else{
        await loadimage()
      }
    }
    imgObj.src = partsUrlList[loadedCounter]
  }

  const genImage = async () => {
    context.clearRect(0, 0, 150, 150);
    if(context != null){
      partsUrlList[0] = await lottery(moji)
      partsUrlList[1] = await lottery(fuku)
      partsUrlList[2] = await lottery(eye)
      partsUrlList[3] = await lottery(hair)
      partsUrlList[4] = await lottery(mouth)
      await loadimage()
    }
  }

  const lottery = async(a) => {
    let totalRate = 0.0
    let randomPoint = 0.0

    const loopCount = a.length
    let result;
    for(let i = 0; i < loopCount; i++){
      totalRate += a[i].ratio
    }
    randomPoint = Math.random() * totalRate
    for(let i = 0; i < loopCount; i++){
      if(randomPoint < a[i].ratio){
        result = a[i].fileName
        break
      }
      randomPoint -= a[i].ratio
    }
    return result
  }


  const metamaskLogin = async (e) => {
    e.preventDefault();
    setWaiting(true);
    

    if (window.ethereum && window.ethereum.isMetaMask){
      
        await window.ethereum.request({method: 'eth_requestAccounts'});
        const web3 = new Web3(window.ethereum);
        let chainID = await web3.eth.net.getId();
        console.log(chainID)
              if(chainID == 97){
                  let account = (await web3.eth.getAccounts())[0];
                  
                  setShortAddress(account.substr(0, 5) + "..." + account.substr(-4, 4));
                  accountChangeHandlerM(account);
                  //const _NFTContract = new web3.eth.Contract(voxvotNFT_abi, NFTContractAddress);
                  //setContract(_NFTContract);
              } else {
                try{
                  await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x61' }], // chainId must be in hexadecimal numbers
                  })
                }catch(error){
                  setWaiting(false);
                }
                
                  setErrorMessage('Please chenge network to BSC mainnet. Change network and refresh page.');
                  setWaiting(false);
              }
    } else {
        //console.log("need to install metamask");
        setErrorMessage('Please install MetaMask');
        setWaiting(false);
    }
  };

  const initOnchanged = () =>{
    if(window.ethereum){
        window.ethereum.on("accountsChanged", () => {
            window.location.reload();
        });
        window.ethereum.on("chainChanged", () => {
            window.location.reload();
        });
    }
  };

  const accountChangeHandlerM = (newAddress) => {
    setDefaiultAccount(newAddress);
  }

  useEffect(() => {
    //initOnchanged();
    const canvas = document.getElementById("canvas")
    const context = canvas.getContext("2d")
    setContext(context)
  },[]);

  useEffect( () => {
    if(contract != null){
      (async () => {
        setConnect(true);
        setWaiting(false);
      })();
    }
  },[contract]);
  
  return (
    <div style={{width: "100%", textAlign: "center"}}>

      <div className='text-center bg-gray-900'>
        <div className='bg-gray-900 h-full pt-4'>
          <img src='koga_NFT_T02.png' className='inline-block w-12 mr-3'/>
          <div className='text-gray-200 inline-block text-2xl font-bold'>WA-SHOCK</div>
        </div> 
      </div>
      
      <div className='min-h-screen bg-gray-900 text-center'>
        <button className='text-gray-600 bg-gray-400 rounded px-2 mt-5 hover:bg-gray-600 hover:text-gray-400' 
        onClick={async()=>{
          genImage()
        }}>Gen</button>
        {contract ? (
          <button className='text-gray-600 bg-gray-400 rounded px-2 mt-5 hover:bg-gray-600 hover:text-gray-400' 
              onClick={async()=>{
                  genImage()
          }}>mint</button>
        ):(
          <button className='text-gray-600 bg-gray-400 rounded px-2 mt-5 hover:bg-gray-600 hover:text-gray-400' 
          onClick={async()=>{
            genImage()
          }}>connect</button>
        )}
        <canvas width="150" height="150" id="canvas"></canvas>
      </div>
      
     
      

    </div>
  );
}

export default App;
