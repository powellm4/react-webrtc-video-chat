import React, { useRef, useState } from 'react'
import { servers } from '../servers'
import { firestore } from '../firebase'

const Home = () => {

    // Global State
    const pc = new RTCPeerConnection(servers);
    let localStream: MediaStream
    let remoteStream: MediaStream
    let webcamVideo = useRef<HTMLVideoElement>(null);
    let remoteVideo = useRef<HTMLVideoElement>(null);

    const setupStreams = async () => {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        remoteStream = new MediaStream();

        // Push tracks from local stream to peer connection
        localStream.getTracks().forEach((track) => {
            pc.addTrack(track, localStream);
        })

        // Pull tracks from remote stream, add to video stream
        pc.ontrack = (event) => {
            event.streams[0].getTracks().forEach((track) => {
                remoteStream.addTrack(track);
            });
        };

        if (null !== webcamVideo.current && null !== remoteVideo.current) {
            webcamVideo.current.srcObject = localStream;
            remoteVideo.current.srcObject = remoteStream;
        }
    }

    return (
        <div>
            <h2>1. Start your Webcam</h2>
            <div className="videos">
                <span>
                    <h3>Local Stream</h3>
                    <video ref={webcamVideo} autoPlay playsInline></video>
                </span>
                <span>
                    <h3>Remote Stream</h3>
                    <video ref={remoteVideo} autoPlay playsInline></video>
                </span>
            </div>
            <button id="webcamButton" onClick={() => setupStreams()}>Start webcam</button>
            <h2>2. Create a new Call</h2>
            <button id="callButton" disabled>Create Call (offer)</button>

        </div>

    )
}
export default Home
