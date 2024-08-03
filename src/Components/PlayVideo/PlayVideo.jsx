import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best YouTube Channel To Learn Coding</h3>
      <div className="play-video-info">
        <p>15K Views &bull; 2 days ago</p>
        <div>
            <span><img src={like} alt="" />125</span>
            <span><img src={dislike} alt="" />1</span>
            <span><img src={share} alt="" />1K</span>
            <span><img src={save} alt="" />125K</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
            <p>Jack</p>
            <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel Uye uye</p>
        <p>Subscribe ges</p>
        <hr />
        <h4>150 Comments</h4>
        <div className="video-comments">
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h4>Jack Nicklaus <span>1 day ago</span></h4>
                <p>Best channel to learn coding</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PlayVideo;
