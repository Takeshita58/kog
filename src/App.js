import './App.css';
import MediaQuery from "react-responsive";
import bg from './bg01.png'


function App() {
  
  return (
    <div className="App">

      <MediaQuery query="(min-width: 768px)">
      <header className="App-header">
        
        <div className='flex between'>
          <img alt="icon" src={"/oumc.jpg"} className="logo"/>
          <div style={{display: "table"}}>
            <div style={{verticalAlign: "middle", display: "table-cell", fontWeight: "medium", color: "#cc3600"}}>SUMO Oracle</div>
          </div>
        </div>

       
        
      </header>
      </MediaQuery>

      <MediaQuery query="(max-width: 767px)">
          <header className="mApp-header">
            
            <div className='flex between'>
              <img alt="icon" src={"/inu.png"} className="logo"/>
              <div style={{display: "table"}}>
                <div style={{verticalAlign: "middle", display: "table-cell", fontWeight: "bold", color: "#cc3600"}}>SUMO Oracle</div>
              </div>
            </div>
            
          </header>

          <div id="home" className='conte' style={{paddingTop: "11vh"}}>

          <div style={{paddingLeft: "5%", width: "90%", height:"100%", alignItems: "center", display:"flex"}}>
            <div style={{width:"100%"}}>
              <div style={{textAlign:"left"}}>
                <div style={{fontSize: "xxx-large", fontWeight: "bold", color: "#cc3600", marginBottom: "3px"}}>$OUMC</div>
                <div style={{fontSize: "xx-large", fontWeight: "bold", marginBottom: "30px"}}>SUMO Oracle</div>
                <div style={{fontSize: "large", fontWeight: "revert", color: "#faebd7", marginBottom: "30px"}}>Our goal is to promote sumo, Japan's traditional national sport, throughout the world.</div>
                <div className='flex between'>
                  <div className='mitem'><span>Buy Now</span></div>
                  <div className='mitem'><span>Live Chart</span></div>
                </div>
                <div className='flex between'>
                  <div className='mitem'><span>Telegram</span></div>
                  <div className='mitem'><span>Twitter</span></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div id="about" className='mconteTow' style={{border: "none", marginTop:"-1px"}}>
          <div className='mmidashi'>About Us</div>
          <div className='mhonbun'>
          Sumo is a traditional Japanese martial art in which big, fat men clash naked. They eat, sleep, and train repeatedly to build up their huge bodies.

Their powerful fights are televised and very popular.
As proof, there are countless "Sumo" competitions all over the world.

Our goal is to promote sumo internationally. We have already partnered with several sports betting services, and for this reason we decided that it was necessary to have a reliable reference of sumo results on the blockchain.


          </div>
          <div className='mhonbun' style={{marginTop: "20px"}}>
          Come on! Join us and bring the excitement of Sumo to the world!
            <br/>Official Ca:<a href='https://www.google.com/' rel="noreferrer" target="_blank" style={{color:"white"}}>0x935...03904</a>
          </div>
        </div>

        <div id="tokenomics" className='mconteTow' style={{border: "none", marginTop:"-1px"}}>
          <div className='mmidashi'>Tokenomics</div>
            <div style={{paddingLeft: "5%", width: "100%", height:"100%", alignItems: "center", display:"flex"}}>

            <div>
              
              <div style={{width: "200px", marginBottom:"30px"}}>
                <div style={{display: "flex"}}>
                  <img alt="icon" src={"/tokeno01.png"} className="logo"/>
                </div>
                <div style={{textAlign: "left", fontSize: "x-large", color: "antiquewhite", fontWeight:"bold"}}>Buy Tax</div>
                <div style={{textAlign: "left", fontSize: "small", color: "antiquewhite"}}>4% Total Buy Tax</div>
              </div>

              <div style={{width: "200px"}}>
                <div style={{display: "flex"}}>
                  <img alt="icon" src={"/tokeno02.png"} className="logo"/>
                </div>
                <div style={{textAlign: "left", fontSize: "x-large", color: "antiquewhite", fontWeight:"bold"}}>Sell Tax</div>
                <div style={{textAlign: "left", fontSize: "small", color: "antiquewhite"}}>4% Total Sell Tax</div>
              </div>

            </div>


              <div>

                  <div style={{width: "200px", marginBottom:"30px"}}>
                    <div style={{display: "flex"}}>
                      <img alt="icon" src={"/tokeno03.png"} className="logo"/>
                    </div>
                    <div style={{textAlign: "left", fontSize: "x-large", color: "antiquewhite", fontWeight:"bold"}}>Total Supply</div>
                    <div style={{textAlign: "left", fontSize: "small", color: "antiquewhite"}}>1,000,000,000,000</div>
                  </div>

                  <div style={{width: "200px"}}>
                    <div style={{display: "flex"}}>
                      <img alt="icon" src={"/tokeno04.png"} className="logo"/>
                    </div>
                    <div style={{textAlign: "left", fontSize: "x-large", color: "antiquewhite", fontWeight:"bold"}}>Total Security</div>
                    <div style={{textAlign: "left", fontSize: "small", color: "antiquewhite"}}>100% Locked Liquidity</div>
                  </div>

              </div>

          </div>
        </div>

        <div id="community" className='mconteTow' style={{border: "none", marginTop:"-1px"}}>
        <div className='mmidashi'>Community</div>
        <div className='mhonbun'>
          A community you can trust. Here are all your like-minded people who, just like you, want to make the token successful and multiply their capital.
        </div>
      </div>

      <div id="marketing" className='mconteTow' style={{border: "none", paddingBottom: "100px", marginTop: "-1px"}}>
        <div className='mmidashi'>Marketing</div>
        <div className='mhonbun'>
          The marketing is that the team chooses the most profitable strategy and already in the beginning more and more will be known about the token.
        </div>
      </div>

      <div className='mfooter' style={{marginTop: "-1px"}}>
        <div style={{width: "100%", height:"100%"}}>

          <div>
            <div style={{width:"30%", marginRight:"auto", marginLeft:"auto", marginBottom: "30px", marginTop: "10px"}}>
              <div className='flex between'>
                <img alt="icon" src={"/inu.png"} className="logo"/>
                <div style={{display: "table"}}>
                  <div style={{verticalAlign: "middle", display: "table-cell", fontWeight: "bold", color: "#cc3600"}}>SUMO Oracle</div>
                </div>
              </div>
            </div>

              

             

              <div style={{textAlign: "center", color: "antiquewhite", marginBottom: "30px"}}>
                <div style={{fontWeight: "bold", marginBottom: "10px"}}>Other Links</div>
                <div className='footerLink' style={{cursor: "pointer"}}>Dextools</div>
                <div className='footerLink' style={{cursor: "pointer"}}>Etherscan</div>
              </div>

              <div style={{textAlign: "center", color: "antiquewhite"}}>
                <div style={{fontWeight: "bold", marginBottom: "10px"}}>Subscribe Us</div>
                <div className='flex' style={{width:"30%", marginRight:"auto", marginLeft:"auto", paddingLeft: "10px", marginBottom: "20px"}}>
                  <img alt="twitter" src={"/icons8-twitter-circled-48.png"} className="subscribe" style={{cursor: "pointer"}}/>
                  <img alt="telegram" src={"/icons8-telegram-app-48.png"} className="subscribe" style={{cursor: "pointer"}}/>
                </div>
              </div>
          </div>
        </div>
      </div>
      </MediaQuery>

      <MediaQuery query="(min-width: 768px)">
        <div id="home" className='conte' style={{backgroundImage: `url(${bg})`, backgroundSize: "cover", border: "none", backgroundPosition: "50% 25%", paddingTop: "20vh"}}>

          <div style={{paddingLeft: "12%", width: "40%", height:"100%", alignItems: "center", display:"flex"}}>
            <div style={{width:"100%"}}>
              <div style={{textAlign:"left"}}>
                <div style={{fontSize: "xxx-large", fontWeight: "bold", color: "#cc3600", marginBottom: "3px"}}>$OUMC</div>
                <div style={{fontSize: "xx-large", fontWeight: "bold", marginBottom: "30px"}}>SUMO Oracle</div>
                <div style={{fontSize: "large", fontWeight: "revert", color: "#faebd7", marginBottom: "30px"}}>Our goal is to promote sumo, Japan's traditional national sport, throughout the world.</div>
                <div className='flex between'>
                  <div className='item'><span>Buy Now</span></div>
                  <div className='item'><span>Live Chart</span></div>
                  <div className='item'><span>Telegram</span></div>
                  <div className='item'><span>Twitter</span></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div id="about" className='conteTow' style={{border: "none"}}>
          <div className='midashi'>About Us</div>
          <div className='honbun'>
          Sumo is a traditional Japanese martial art in which big, fat men clash naked. They eat, sleep, and train repeatedly to build up their huge bodies.

Their powerful fights are televised and very popular.
As proof, there are countless "Sumo" competitions all over the world.

Our goal is to promote sumo internationally. We have already partnered with several sports betting services, and for this reason we decided that it was necessary to have a reliable reference of sumo results on the blockchain.


          </div>
          <div className='honbun' style={{marginTop: "20px"}}>
          Come on! Join us and bring the excitement of Sumo to the world!
            <br/>Official Ca: 
          </div>
        </div>

        <div id="tokenomics" className='conteTow' style={{border: "none"}}>
        <div className='midashi'>Tokenomics</div>
        <div style={{paddingLeft: "12%", width: "100%", height:"100%", alignItems: "center", display:"flex"}}>

          <div className='flex between'>
          
              <div style={{marginRight: "200px"}}>
                <div style={{display: "flex"}}>
                  <img alt="icon" src={"/tokeno01.png"} className="logo toke"/>
                </div>
                <div style={{textAlign: "left", fontSize: "x-large", color: "antiquewhite", fontWeight:"bold"}}>Buy Tax</div>
                <div style={{textAlign: "left", fontSize: "small", color: "antiquewhite"}}>4% Total Buy Tax</div>
              </div>

              <div style={{marginRight: "200px"}}>
                <div style={{display: "flex"}}>
                  <img alt="icon" src={"/tokeno02.png"} className="logo toke"/>
                </div>
                <div style={{textAlign: "left", fontSize: "x-large", color: "antiquewhite", fontWeight:"bold"}}>Sell Tax</div>
                <div style={{textAlign: "left", fontSize: "small", color: "antiquewhite"}}>4% Total Sell Tax</div>
              </div>

              <div style={{marginRight: "200px"}}>
                <div style={{display: "flex"}}>
                  <img alt="icon" src={"/tokeno03.png"} className="logo toke"/>
                </div>
                <div style={{textAlign: "left", fontSize: "x-large", color: "antiquewhite", fontWeight:"bold"}}>Total Supply</div>
                <div style={{textAlign: "left", fontSize: "small", color: "antiquewhite"}}>1,000,000,000,000</div>
              </div>

              <div style={{marginRight: "200px"}}>
                <div style={{display: "flex"}}>
                  <img alt="icon" src={"/tokeno04.png"} className="logo toke"/>
                </div>
                <div style={{textAlign: "left", fontSize: "x-large", color: "antiquewhite", fontWeight:"bold"}}>Total Security</div>
                <div style={{textAlign: "left", fontSize: "small", color: "antiquewhite"}}>100% Locked Liquidity</div>
              </div>

          </div>

        </div>
      </div>

      <div id="community" className='conteTow' style={{border: "none"}}>
        <div className='midashi'>Community</div>
        <div className='honbun'>
          A community you can trust. Here are all your like-minded people who, just like you, want to make the token successful and multiply their capital.
        </div>
      </div>

      <div id="marketing" className='conteTow' style={{border: "none", paddingBottom: "100px", marginTop: "-1px"}}>
        <div className='midashi'>Marketing</div>
        <div className='honbun'>
          The marketing is that the team chooses the most profitable strategy and already in the beginning more and more will be known about the token.
        </div>
      </div>

      <div className='footer' style={{marginTop: "-1px"}}>
        <div style={{paddingLeft: "12%", width: "100%", height:"100%", alignItems: "center", display:"flex"}}>
          <div className='flex between'>
          
              <div style={{marginRight: "150px"}}>
                <div style={{display: "flex"}}>
                  <img alt="icon" src={"/oumc.jpg"} className="logo"/>
                  <div style={{display: "table"}}>
                    <div style={{verticalAlign: "middle", display: "table-cell", fontWeight: "bold", color: "#cc3600"}}>SUMOU Oracle</div>
                  </div>
                </div>
                <div style={{textAlign: "left", fontSize: "small", color: "antiquewhite"}}>Our goal is to promote sumo, <br/>Japan's traditional national sport, <br/>throughout the world.</div>
              </div>
              

              <div style={{textAlign: "left", color: "antiquewhite",marginRight: "200px"}}>
                <div style={{fontWeight: "bold", marginBottom: "10px"}}>Other Links</div>
                <div className='footerLink' style={{cursor: "pointer"}}>Dextools</div>
                <div className='footerLink' style={{cursor: "pointer"}}>Etherscan</div>
              </div>

              <div style={{textAlign: "left", color: "antiquewhite",marginRight: "200px"}}>
                <div style={{fontWeight: "bold", marginBottom: "10px"}}>Subscribe Us</div>
                <div className='flex between'>
                  <img alt="twitter" src={"/icons8-twitter-circled-48.png"} className="subscribe" style={{cursor: "pointer"}}/>
                  <img alt="telegram" src={"/icons8-telegram-app-48.png"} className="subscribe" style={{cursor: "pointer"}}/>
                </div>
              </div>
          </div>
        </div>
      </div>

      </MediaQuery>









      

    </div>
  );
}

export default App;
