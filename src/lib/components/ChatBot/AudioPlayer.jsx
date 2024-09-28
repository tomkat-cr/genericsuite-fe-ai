import React, { useState, useRef } from 'react';

import * as gs from "genericsuite";

import { iconsLibAiExtras } from '../../helpers/iconsLibAiExtras.jsx';
import './AudioPlayer.css';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import {
//     faPlay,
//     faStop,
// } from "@fortawesome/fontawesome-free-solid";
// fontawesome.library.add(
//     faPlay,
//     faStop,
// );
const GsIcons = gs.IconsLib.GsIcons;

const WARNING_MSG_CLASS = gs.classNameConstants.WARNING_MSG_CLASS;
const defaultFilenametoDownload = gs.blobFilesUtilities.defaultFilenametoDownload;
const decodeBlob = gs.blobFilesUtilities.decodeBlob;
const console_debug_log = gs.loggingService.console_debug_log;

const debug = false;
const browserAudioController = true;

const AudioPlayer = ({ blobUrl, filename, expired, errorMsgSuffix }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioPlayer = useRef(); // reference to the audio component

  const fixBlob = () => {
    if (!blobUrl) {
      return;
    }
    fetch(blobUrl).then(r => {
      r.blob().then(blob => {
        const reader = new FileReader();
        // reader.readAsDataURL(blob);  // Convert to data:audio/mpeg;base64,Ly9Qa3h...
        reader.readAsText(blob);  // No convertion at all... just get what it receives...
        reader.onloadend = function() {
          const newBlobUrl = decodeBlob(reader.result, filename);
          audioPlayer.current.src = newBlobUrl;
          audioPlayer.current.play();
        }
      });
    });
  };

  // Play & Pause toggle function
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play().catch(error => {
        if (debug) console_debug_log("AudioPlayer | togglePlayPause | error:", error, 'error.message:', error.message);
        const errorMsgs = [
            "Failed to load because no supported source was found.",
            "The element has no supported sources.",
        ]
        if (Object.values(errorMsgs).some(msg => error.message.includes(msg))) {
          // Probably the data comes from AWS API Gateway in Base64 format
          // Try to convert Base64 to Binary
          fixBlob();
        } else {
          console.error(error);
        }
      });
    } else {
      audioPlayer.current.pause();
    }
  };

  // Update the current time
  const onPlaying = () => {
    setCurrentTime(audioPlayer.current.currentTime);
    setDuration(audioPlayer.current.duration);
    if (audioPlayer.current.duration === audioPlayer.current.currentTime) {
      setIsPlaying(false);
    }
  };

  // Adjust current time as per the slider
  const onScrub = (value) => {
    setCurrentTime(value);
    audioPlayer.current.currentTime = value;
    if (!isPlaying) {
      togglePlayPause();
    }
  };

  // Download the audio file
  const downloadAudio = () => {
    const link = document.createElement('a');
    link.href = blobUrl;
    link.setAttribute('download', filename ? filename : defaultFilenametoDownload); // or any other format
    document.body.appendChild(link);
    link.click();
  };

  if (expired) {
    return (
      <div
        className={WARNING_MSG_CLASS}
      >
        {`Audio file expired${errorMsgSuffix}`}
      </div>
    );
  }

  if (browserAudioController) {
    return (
      <>
        <audio ref={audioPlayer} src={blobUrl} controls onBeforeInput={togglePlayPause} />
      </>
    );
  }

  return (
    <div className="audio-player">
      <audio ref={audioPlayer} src={blobUrl} onTimeUpdate={onPlaying} />
      <button
        onClick={togglePlayPause}
        className="play-button"
      >
          {/* <FontAwesomeIcon icon={isPlaying ? 'stop' : 'play'} size='sm'/> */}
          <GsIcons
            icon={isPlaying ? 'stop' : 'play'}
            size='sm'
            additionalIconsFn={iconsLibAiExtras}
          />
      </button>
      <input
        type="range"
        value={currentTime}
        step="1"
        min="0"
        max={duration}
        onChange={(e) => onScrub(e.target.value)}
      />
      <div className="menu">
        <button onClick={() => {}}>...</button>
        <div className="menu-content">
          <button onClick={downloadAudio}>Download</button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
