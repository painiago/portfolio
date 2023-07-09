import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

import './welcome.scss'
import videoAudio from '/public/img/intro.mp4';

function SettingAudio() {
  // Definindo o estado do áudio
  const [audioLigado, setAudioLigado] = useState(false);

  // Referência para o elemento de áudio
  const audioRef = useRef(null);

  // Função que alterna o estado do áudio e do ícone correspondente
  function toggleAudio() {
    const audio = audioRef.current as unknown as HTMLAudioElement;
  
    if (audio) {
      // Alterna o estado do áudio
      setAudioLigado(!audioLigado);
  
      // Alterna o estado do áudio do elemento de áudio
      if (audioLigado) {
        audio.pause();
        audio.removeAttribute("loop"); // Remove a propriedade loop quando o áudio é desligado
      } else {
        audio.play();
        audio.currentTime = 0;
        audio.setAttribute("loop", ""); // Adiciona a propriedade loop quando o áudio é ligado
      }
    }
  }

  return (
    <div>
      {/* Ícone do áudio */}
      <FontAwesomeIcon
        id="audio-icon"
        icon={audioLigado ? faVolumeUp : faVolumeMute}
        onClick={toggleAudio}
     className="iconAudio" />

      {/* Elemento de áudio */}
      <audio ref={audioRef}>
        <source src={videoAudio} type="video/mp4" />
      </audio>
    </div>
  );
}

export default SettingAudio;
