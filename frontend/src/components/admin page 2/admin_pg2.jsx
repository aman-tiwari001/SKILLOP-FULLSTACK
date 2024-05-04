import React from 'react';
import './global.css';
import './index.css';

function App() {
  return (
    <div className="posts-overview">
      <img className="posts-overview-child" alt="" src="./public/group-64.svg" />
      <img className="posts-overview-item" alt="" src="./public/vector-40.svg" />
      <div className="posts-overview-inner"></div>
      <div className="ellipse-div"></div>
      <div className="posts-overview-child1"></div>
      <div className="posts-overview-child2"></div>
      <div className="rectangle-div"></div>
      <img className="vector-icon" alt="" src="./public/vector.svg" />
      <img className="vector-icon1" alt="" src="./public/vector.svg" />
      <img className="vector-icon2" alt="" src="./public/vector.svg" />
      <img className="vector-icon3" alt="" src="./public/vector.svg" />
      <img className="saly-12-icon" alt="" src="./public/saly12@2x.png" />
      <header className="navbar">
        <div className="navbar-child"></div>
        <img className="skillop-no-bg-1-icon" loading="lazy" alt="" src="skillop_no_bg 1.png" />
        <div className="skillop-wrapper">
          <h3 className="skillop">SKILLOP</h3>
        </div>
      </header>
      <section className="frame-section">
        <div className="frame-parent">
          <div className="frame-wrapper">
            <div className="frame-group">
              <div className="frame-container">
                <div className="octiconhome-16-parent">
                  <img className="octiconhome-16" loading="lazy" alt="" src="Frame 55262.png" />
                  <div className="dashboard-wrapper">
                    <div className="dashboard">Dashboard</div>
                  </div>
                </div>
              </div>
              <div className="mdiusers-parent">
                <img className="mdiusers-icon" loading="lazy" alt="" src="Vector.png" />
                <div className="users-wrapper">
                  <div className="users">Users</div>
                </div>
              </div>
              <div className="mdihelp-outline-parent">
                <img className="mdihelp-outline-icon" loading="lazy" alt="" src="mdi_help-outline.png" />
                <div className="mentors-wrapper">
                  <div className="mentors">mentors</div>
                </div>
              </div>
              <div className="mdievent-parent">
                <img className="mdievent-icon" loading="lazy" alt="" src="mdi_event.png" />
                <div className="events-wrapper">
                  <div className="events">Events</div>
                </div>
              </div>
              <div className="gridiconsposts-parent">
                <img className="gridiconsposts" loading="lazy" alt="" src="gridicons_posts.png" />
                <div className="posts-wrapper">
                  <b className="posts">Posts</b>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-child"></div>
          <div className="frame-div">
            <div className="frame-parent1">
              <div className="frame-parent2">
                <div className="frame-wrapper1">
                  <div className="posts-overview-parent">
                    <b className="posts-overview1">Posts overview</b>
                    <div className="delete-profile-post-parent">
                      <b className="delete-profile-post">Delete Profile/ Post</b>
                      <form className="frame-form">
                        <div className="delete-profile-parent">
                          <div className="delete-profile">Delete Profile</div>
                          <div className="frame-parent3">
                            <div className="enter-username-wrapper">
                              <input className="enter-username" placeholder="Enter Username" type="text" />
                            </div>
                            <button className="delete-wrapper">
                              <div className="delete">Delete</div>
                            </button>
                          </div>
                        </div>
                        <div className="delete-post-parent">
                          <div className="delete-post">Delete Post</div>
                          <div className="frame-parent4">
                            <div className="enter-post-link-wrapper">
                              <input className="enter-post-link" placeholder="Enter Post Link" type="text" />
                            </div>
                            <button className="delete-container">
                              <div className="delete1">Delete</div>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <b className="top-posts">Top Posts</b>
                <div className="frame-wrapper2">
                  <div className="frame-parent5">
                    <div className="frame-parent6">
                      <div className="frame-parent7">
                        <img className="frame-item" loading="lazy" alt="" src="Frame 55250.png" />
                        <div className="frame-wrapper3">
                          <div className="michel-smithwick-parent">
                            <div className="michel-smithwick">Michel Smithwick</div>
                            <div className="sdepaytm">SDE@paytm</div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-wrapper4">
                        <div className="tablercheck-parent">
                          <img className="tablercheck-icon" loading="lazy" alt="" src="tabler_check.png" />
                          <div className="following">FOLLOWING</div>
                        </div>
                      </div>
                    </div>
                    <div className="lorem-ipsum-dolor">
                      Lorem ipsum dolor sit amet consectetur. Egestas bibendum vestibulum dolor facilisis odio augue pretium nam. Morbi accumsan risus enim faucibus. Aliquet nisi sed in feugiat nunc posuere id fringilla.
                    </div>
                    <img className="frame-inner" loading="lazy" alt="" src="Frame 55251.png" />
                  </div>
                </div>
              </div>
              <div className="liked-posts">
                <div className="liked-by-devyansh-and-60-other-parent">
                  <div className="liked-by-devyansh">Liked by Devyansh and 60 others</div>
                  <div className="comments">2 comments</div>
                </div>
              </div>
              <div className="share-button">
                <div className="like-icon-parent">
                  <div className="like-icon"></div>
                  <div className="comment-icon-wrapper">
                    <div className="comment-icon">
                      <div className="iconamoonlike-parent">
                        <img className="iconamoonlike" alt="" src="./public/iconamoonlike.svg" />
                        <div className="post-share">
                          <div className="like">Like</div>
                        </div>
                      </div>
                      <div className="post-comments">
                        <img className="iconamooncomment-dots" alt="" src="./public/iconamooncommentdots.svg" />
                        <div className="post-likes">
                          <div className="comment">Comment</div>
                        </div>
                      </div>
                      <div className="share-icon">
                        <img className="material-symbolsshare-outline-icon" alt="" src="./public/materialsymbolsshareoutline.svg" />
                        <div className="share">Share</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line-div"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
