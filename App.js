import React, { useState } from 'react';
import logo from './images/logo.jpg';
import './App.css';
import { InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function TopBar() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      height: '50px',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      <img src={logo} alt="Logo" style={{
        height: '40px',
        marginLeft: '10px',
        marginRight: '100px'
      }} />
      <button className="topBarButton">News</button>
      <button className="topBarButton">Community</button>
      <button className="topBarButton">About us</button>
      <button className="topBarButton">Join us</button>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: '10px',
        padding: '1px'
      }}>
        <Search style={{ color: 'gray', marginLeft: '5px' }} />
        <InputBase placeholder="Search..." style={{ marginLeft: '5px' }} />
      </div>
      <button className="topBarButton">Log in/Sign up</button>
    </div>
  );
}

function Main() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => { // handles search input, transfer to ResultPage on search
    if (searchQuery.toLowerCase().includes('resume') || searchQuery.toLowerCase().includes('scoring')) {
      window.location.href = '/ResultPage.js';
    }
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: '200px 200px 200px',
      position: 'relative',
      backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/5cf060751f334d000183ce62/1566608042948-5FS3O78C6ZBSX33HBKY8/1_campanile_at_night.jpg?format=2500w)',
      backgroundSize: 'cover',
      backgroundColor: 'black'
    }}>

      <div style={{
        gridRow: '1',
        marginTop: '100px',
        textAlign: 'center',
        color: 'white',
        fontSize: '100px',
        fontWeight: 'bold',
      }}>
        MLaaS
      </div>

      <div style={{
        gridRow: '2',
        display: 'flex',
        margin: 'auto',
        marginTop: '50px',
        marginBottom: '100px',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '50px',
        width: '600px',
      }}>
        <Search style={{ color: 'gray', marginLeft: '5px' }} onClick={handleSearch} />
        <InputBase
          placeholder="Explore AI Service"
          style={{ marginLeft: '5px', padding: '5px', fontSize: '20px', width: '100%' }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
      </div>

      <div style={{
        gridRow: '3',
        backgroundColor: 'white',
        justifySelf: 'center',
        width: '80%',
        height: '200px',
        display: 'grid',
        gridTemplateColumns: '1fr 1px 1fr 1px 1fr',
      }}>
        <div className="mainGuideGrid" style={{
          gridColumn: '1',
        }}>
          <button className="mainGuideButton" style={{ fontWeight: 'bold' }}>Popular APIs</button>
          <button className="mainGuideButton">Speech recognition</button>
          <button className="mainGuideButton">Facial recognition</button>
          <button className="mainGuideButton">OCR</button>
        </div>

        <div style={{ gridColumn: '2', display: 'flex', alignItems: 'center' }}>
          <div style={{ height: '80%', borderRight: '1px solid #CCC' }}></div>
        </div>

        <div className="mainGuideGrid" style={{
          gridColumn: '3',
        }}>
          <button className="mainGuideButton" style={{ fontWeight: 'bold' }}>Newest APIs</button>
          <button className="mainGuideButton">Voice changer</button>
          <button className="mainGuideButton">GPT</button>
          <button className="mainGuideButton">Fraud detection</button>
        </div>

        <div style={{ gridColumn: '4', display: 'flex', alignItems: 'center' }}>
          <div style={{ height: '80%', borderRight: '1px solid #CCC' }}></div>
        </div>

        <div className="mainGuideGrid" style={{
          gridColumn: '5',
        }}>
          <button className="mainGuideButton" style={{ fontWeight: 'bold' }}>Guide</button>
          <button className="mainGuideButton">How to use MLCoin</button>
          <button className="mainGuideButton">API documentation</button>
          <button className="mainGuideButton">Tutorial</button>
        </div>
      </div>

    </div>
  );
}

function API() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => { // handles search input, transfer to ResultPage on search
    if (searchQuery.toLowerCase().includes('resume') || searchQuery.toLowerCase().includes('scoring')) {
      window.location.href = '/ResultPage.js';
    }
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 8fr 1fr',
      backgroundColor: 'black',
    }}>
      <div style={{
        gridColumn: '1',
      }}>
        Left
      </div>

      <div style={{
        gridColumn: '2',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateRows: '170px 400px 150px 600px',
        }}>
          /* Resume Scoring Text */
          <div style={{
            gridRow: '1',
            marginTop: '75px',
            marginBottom: '25px',
            color: 'white',
            fontSize: '50px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            height: '70px',
          }}>
            <div class="blue-rect"></div>
            Resume Scoring
          </div>

          /* Resume Scoring Grid */
          <div style={{
            gridRow: '2',
            justifySelf: 'center',
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateColumns: '4fr 6fr',
          }}>
            <div style={{
              gridColumn: '1',
              display: 'grid',
              gridTemplateRows: '1fr 1fr',
            }}>
              <div style={{
                gridRow: '1',
                display: 'flex',
                alignItems: 'center',
                marginTop: '100px',
                marginLeft: '80px',
              }}>
                <button className='resumeScoringButton'>Getting Started</button>
              </div>

              <div style={{
                gridRow: '2',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                marginLeft: '100px',
              }}>
                <button className='resumeScoringButton' style={{ backgroundColor:'black', fontSize:'24px' }}>
                  Customize
                  <FontAwesomeIcon icon={faAngleRight} style={{ backgroundColor:'black', paddingLeft: '5px' }}/>
                </button>
                <button className='resumeScoringButton' style={{ backgroundColor:'black', fontSize:'24px' }}>
                  Explore Templates
                  <FontAwesomeIcon icon={faAngleRight} style={{ backgroundColor:'black', paddingLeft: '5px' }}/>
                </button>
              </div>
            </div>

            <div style={{
              gridColumn: '2',
              borderRadius: '20px',
              backgroundImage: 'url(https://www.resumego.net/wp-content/uploads/resumechecker4.png)',
              backgroundSize: 'cover',
            }}>

            </div>
          </div>

          /* Other API Service Text */
          <div style={{
            gridRow: '3',
            marginTop: '75px',
            marginBottom: '25px',
            color: 'white',
            fontSize: '30px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            height: '50px',
          }}>
            <div class="blue-rect"></div>
            Other API Services
          </div>

          /* API Service Grid */
          <div style={{
            gridRow: '4',
            backgroundColor: 'white',
            justifySelf: 'center',
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateRows: '79px 1px 520px',
          }}>

            <div style={{
              gridRow: '1',
              backgroundColor: 'white',
              alignSelf: 'center',
              paddingLeft: '20px',
            }}>
              <div style={{ color: 'black', fontSize: '25px', fontWeight: 'bold' }}>Computer Vision</div>
            </div>

            <div style={{ backgroundColor: 'gray', gridRow: '2', marginLeft: '1%', marginRight: '1%' }}></div>

            <div style={{
              gridRow: '3',
              backgroundColor: 'white',
              height: '100%',
              display: 'grid',
              gridTemplateRows: '1fr 9fr',
            }}>

              <div style={{
                gridRow: '1',
                backgroundColor: 'white',
                alignSelf: 'center',
                paddingLeft: '20px',
              }}>
                <div style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>Image Recognition</div>
              </div>

              <div style={{
                gridRow: '2',
                backgroundColor: 'white',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)',
                marginLeft: '2%',
                marginRight: '2%',
                marginBottom: '2%',
              }}>
                <div className="apiGrid" style={{ gridRow: '1', gridColumn: '1', }}>
                  <button className="apiGridButton">General Object and Scene Recognition</button>
                  <div className="apiGridText">Recognize more than 100,000 common objects</div>
                </div>
                <div className="apiGrid" style={{ gridRow: '1', gridColumn: '2', }}>
                  <button className="apiGridButton">Vehicle Detection</button>
                  <div className="apiGridText">Detect all vehicles in the image, identify vehicles</div>
                </div>
                <div className="apiGrid" style={{ gridRow: '1', gridColumn: '3', }}>
                  <button className="apiGridButton">Currency Identification</button>
                  <div className="apiGridText">Identify common currencies, support front and back</div>
                </div>
                <div className="apiGrid" style={{ gridRow: '2', gridColumn: '1', }}>
                  <button className="apiGridButton">Brand/Logo Recognition</button>
                  <div className="apiGridText">Recognize more than 20,000 types of product logos and brands</div>
                </div>
                <div className="apiGrid" style={{ gridRow: '2', gridColumn: '2', }}>
                  <button className="apiGridButton">Plant Identification</button>
                  <div className="apiGridText">Identify more than 20,000 types of plants with distributions and special characteristics</div>
                </div>
                <div className="apiGrid" style={{ gridRow: '2', gridColumn: '3', }}>
                  <button className="apiGridButton">Animal Identification</button>
                  <div className="apiGridText">Identify more than 20,000 types of animals with distributions and special characteristics</div>
                </div>
                <div>
                <button className="apiMoreButton">
                  More
                  <FontAwesomeIcon icon={faAngleRight} style={{ backgroundColor:'white', paddingLeft: '5px' }}/>
                </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

      <div style={{
        gridColumn: '3',
      }}>
        Right
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div style={{
      backgroundColor: 'black',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div style={{
        backgroundColor: 'black',
        color: 'white',
        height: '50px',
        width: '97%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderTop: '1px solid #333',
      }}>
        <button className="bottomBarButton">Privacy</button>
        <button className="bottomBarButton">Terms</button>
        <button className="bottomBarButton">Settings</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <TopBar/>
      <Main/>
      <API/>
      <BottomBar/>
    </div>
  );
}

export default App;