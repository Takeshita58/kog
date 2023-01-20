import './App.css';
import MediaQuery from "react-responsive";
import bg from './bg01.png'
import { Link as Scroll } from 'react-scroll';

function App() {
  
  return (
<<<<<<< HEAD
    <div className="App">

      <MediaQuery query="(min-width: 768px)">
=======
    <div className="bg-red-500 text-center">
>>>>>>> parent of de2492f (del tailwind)
      <header className="App-header">
        
        <div className='flex between'>
          <img alt="icon" src={"/inu.png"} className="logo"/>
          <div style={{display: "table"}}>
            <div style={{verticalAlign: "middle", display: "table-cell", fontWeight: "bold", color: "#ffd700"}}>Shibuya Inu</div>
          </div>
        </div>

        <div style={{width:"50%", height:"100%", alignItems: "center", display:"flex"}}>
          <div className='flex between' style={{width:"100%", marginLeft:"20%", marginTop:"25px"}}>
                <Scroll to="home" smooth={true} duration={600} style={{fontWeight:"normal", fontSize:"large", color: "antiquewhite", cursor: "pointer"}}>Home</Scroll>
                <Scroll to="about" smooth={true} duration={600} style={{fontWeight:"normal", fontSize:"large", color: "antiquewhite", cursor: "pointer"}}>About</Scroll>
                <Scroll to="tokenomics" smooth={true} duration={600} style={{fontWeight:"normal", fontSize:"large", color: "antiquewhite", cursor: "pointer"}}>Tokenomics</Scroll>
                <Scroll to="community" smooth={true} duration={600} style={{fontWeight:"normal", fontSize:"large", color: "antiquewhite", cursor: "pointer"}}>Community</Scroll>
                <Scroll to="marketing" smooth={true} duration={600} style={{fontWeight:"normal", fontSize:"large", color: "antiquewhite", cursor: "pointer"}}>Marketing</Scroll>
          </div>
        </div>
        
      </header>
      </MediaQuery>

      <MediaQuery query="(max-width: 767px)">
          <header className="mApp-header">
            
            <div className='flex between'>
              <img alt="icon" src={"/inu.png"} className="logo"/>
              <div style={{display: "table"}}>
                <div style={{verticalAlign: "middle", display: "table-cell", fontWeight: "bold", color: "#ffd700"}}>Shibuya Inu</div>
              </div>
            </div>
            
          </header>

          <div id="home" className='conte' style={{paddingTop: "11vh"}}>

          <div style={{paddingLeft: "5%", width: "90%", height:"100%", alignItems: "center", display:"flex"}}>
            <div style={{width:"100%"}}>
              <div style={{textAlign:"left"}}>
                <div style={{fontSize: "xxx-large", fontWeight: "bold", color: "#ffd700", marginBottom: "3px"}}>$SHIBI</div>
                <div style={{fontSize: "xx-large", fontWeight: "bold", marginBottom: "30px"}}>Shibuya Inu</div>
                <div style={{fontSize: "large", fontWeight: "revert", color: "#faebd7", marginBottom: "30px"}}>The World's Most Famous Shibuya Inu, Hachi, Is Now Taking The Blockchain.</div>
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
            A smiling four-legged friend conquers the world. The cuddly Shiba Inu Maru from Japan has cult status in its home country and is now conquering hearts all over the world.
            <br/>Maru now has over millions of followers on social media.
            The dog from Japan is friendly, fluffy and soft, likes to play, has lots of animal friends and likes to be cuddled and spoiled.
          </div>
          <div className='mhonbun' style={{marginTop: "20px"}}>
            So it's hardly surprising that Maru now even acts as the official tourism ambassador of Mie Prefecture.
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
                  <div style={{verticalAlign: "middle", display: "table-cell", fontWeight: "bold", color: "#ffd700"}}>Shibuya Inu</div>
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
                <div style={{fontSize: "xxx-large", fontWeight: "bold", color: "#ffd700", marginBottom: "3px"}}>$SHIBI</div>
                <div style={{fontSize: "xx-large", fontWeight: "bold", marginBottom: "30px"}}>Shibuya Inu</div>
                <div style={{fontSize: "large", fontWeight: "revert", color: "#faebd7", marginBottom: "30px"}}>The World's Most Famous Shibuya Inu, Hachi, Is Now Taking The Blockchain.</div>
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
            A smiling four-legged friend conquers the world. The cuddly Shiba Inu Maru from Japan has cult status in its home country and is now conquering hearts all over the world.
            <br/>Maru now has over millions of followers on social media.
            The dog from Japan is friendly, fluffy and soft, likes to play, has lots of animal friends and likes to be cuddled and spoiled.
          </div>
          <div className='honbun' style={{marginTop: "20px"}}>
            So it's hardly surprising that Maru now even acts as the official tourism ambassador of Mie Prefecture.
            <br/>Official Ca: 0x9355A6b0227B0A77D74D67dD1EECA78903603904
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
                  <img alt="icon" src={"/inu.png"} className="logo"/>
                  <div style={{display: "table"}}>
                    <div style={{verticalAlign: "middle", display: "table-cell", fontWeight: "bold", color: "#ffd700"}}>Shibuya Inu</div>
                  </div>
                </div>
                <div style={{textAlign: "left", fontSize: "small", color: "antiquewhite"}}>The World's Most Famous Shibuya Inu, Hachi, <br/>Is Now Taking The Blockchain.</div>
              </div>
              

              <div style={{textAlign: "left", color: "antiquewhite",marginRight: "200px"}}>
                <div style={{fontWeight: "bold", marginBottom: "10px"}}>Site Link</div>
                <div className='footerLink' style={{cursor: "pointer"}}><Scroll to="home" smooth={true} duration={600}>Home</Scroll></div>
                <div className='footerLink' style={{cursor: "pointer"}}><Scroll to="about" smooth={true} duration={600}>About</Scroll></div>
                <div className='footerLink' style={{cursor: "pointer"}}><Scroll to="tokenomics" smooth={true} duration={600}>Tokenomics</Scroll></div>
                <div className='footerLink' style={{cursor: "pointer"}}><Scroll to="community" smooth={true} duration={600}>Community</Scroll></div>
                <div className='footerLink' style={{cursor: "pointer"}}><Scroll to="marketing" smooth={true} duration={600}>Marketing</Scroll></div>
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
