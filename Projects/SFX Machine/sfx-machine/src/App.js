import React from 'react';
import './App.css';

const sounds = [
  {
    key: 'Q',
    wav: 'https://freesound.org/people/kapnos_mantis/sounds/212919/download/212919__kapnos-mantis__ow-squelch-2.wav'
  },
  {
    key: 'W',
    wav: 'https://freesound.org/people/skarznstryfe/sounds/131251/download/131251__skarznstryfe__psy-squeak-zap.wav'
  },
  {
    key: 'E',
    wav: 'https://freesound.org/people/usamah/sounds/464997/download/464997__usamah__dream.wav'
  },
  {
    key: 'A',
    wav: 'https://freesound.org/people/kethykraft/sounds/36458/download/36458__kethykraft__09.wav'
  },
  {
    key: 'S',
    wav: 'https://freesound.org/people/mastertronic/sounds/65221/download/65221__mastertronic__foamo-11.wav'
  },
  {
    key: 'D',
    wav: 'https://freesound.org/people/matiasromero/sounds/21707/download/21707__matiasromero__berimbau-single-trippy.wav'
  },
  {
    key: 'Z',
    wav: 'https://freesound.org/people/Diaframe/sounds/399416/download/399416__diaframe__diaframe-s01-vocal-fx-1.wav'
  },
  {
    key: 'X',
    wav: 'https://freesound.org/people/mastertronic/sounds/65223/download/65223__mastertronic__foamo-4.wav'
  },
  {
    key: 'C',
    wav: 'https://freesound.org/people/tripjazz/sounds/518824/download/518824__tripjazz__leeloo-woop.wav'
  },  
];

const App = () => (
  <div id="drum-machine" className="container">
    <div id="display" className="display">
      <h1>Play a sound</h1>
      {sounds.map((sound, idx) => (
        <DrumPad text={sound.key} key={idx} audio={sound.wav} />
      ))}
    </div>
  </div> 
);

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    
    this.audio = React.createRef();
  }
  
  componentDidMount() {
    this.audio.current.addEventListener('ended', (e) => {
      const parent = e.target.parentNode;
      parent.classList.remove('active');
    });
  }
  
  playSound = () => {
    this.audio.current.play();
    
    const id = this.audio.current.id;
    
    const parent = this.audio.current.parentNode;
    parent.classList.add('active');
    
    const display = parent.parentNode;
    display.querySelector('h1').innerText = `${id} is playing`;
  }
  
  render() {
    const { text, audio } = this.props;
    
    return (
      <div className="drum-pad" onClick={this.playSound} id={`drum-${text}`}>
        {text}
        <audio ref={this.audio} src={audio} className="clip" id={text} />
      </div>
    )
  }
}

document.addEventListener('keydown', (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);
  
  if(audio) {
    audio.currentTime = 0;
    const parent = audio.parentNode;
    const display = parent.parentNode;
    display.querySelector('h1').innerText = `${id} is playing`;

    parent.classList.add('active')
    audio.play();
    
  }
});
  

export default App;
