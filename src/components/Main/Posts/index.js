import React from 'react'
import './style.css'
import HomeImg from "../../../images/home.jpg";

const Post = () => {
  return (
    <section>
      <h2 className='post-h2'>Your interest:</h2>
      <div className='posts'>
        <article className='post'>
          <img className='img-posts' src={HomeImg}></img>
          <div className='post-title'>
            <h3 className='post-h3'>Miami Beach</h3>
            <div>
              <div className='post-stars'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_124_359)">
                    <path d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z" fill="#F2F4F7" />
                    <g clip-path="url(#clip1_124_359)">
                      <path d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z" fill="#FDB022" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_124_359">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_124_359">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>4.5</span>
              </div>
            </div>
          </div>
          <p className='post-para'>Miami beaches are renowned for their sun-kissed sands, azure waters.</p>
          <span className='post-price'>USD 130</span>
          <button className='post-button'>Add to shipping</button>
        </article>
        <article className='post'>
          <img className='img-posts' src={HomeImg}></img>
          <div className='post-title'>
            <h3 className='post-h3'>Miami Beach</h3>
            <div>
              <div className='post-stars'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_124_359)">
                    <path d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z" fill="#F2F4F7" />
                    <g clip-path="url(#clip1_124_359)">
                      <path d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z" fill="#FDB022" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_124_359">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_124_359">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>4.5</span>
              </div>
            </div>
          </div>
          <p className='post-para'>Miami beaches are renowned for their sun-kissed sands, azure waters.</p>
          <span className='post-price'>USD 130</span>
          <button className='post-button'>Add to shipping</button>
        </article>
        <article className='post'>
          <img className='img-posts' src={HomeImg}></img>
          <div className='post-title'>
            <h3 className='post-h3'>Miami Beach</h3>
            <div>
              <div className='post-stars'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_124_359)">
                    <path d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z" fill="#F2F4F7" />
                    <g clip-path="url(#clip1_124_359)">
                      <path d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z" fill="#FDB022" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_124_359">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_124_359">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>4.5</span>
              </div>
            </div>
          </div>
          <p className='post-para'>Miami beaches are renowned for their sun-kissed sands, azure waters.</p>
          <span className='post-price'>USD 130</span>
          <button className='post-button'>Add to shipping</button>
        </article>
        <article className='post'>
          <img className='img-posts' src={HomeImg}></img>
          <div className='post-title'>
            <h3 className='post-h3'>Miami Beach</h3>
            <div>
              <div className='post-stars'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_124_359)">
                    <path d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z" fill="#F2F4F7" />
                    <g clip-path="url(#clip1_124_359)">
                      <path d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z" fill="#FDB022" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_124_359">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_124_359">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>4.5</span>
              </div>
            </div>
          </div>
          <p className='post-para'>Miami beaches are renowned for their sun-kissed sands, azure waters.</p>
          <span className='post-price'>USD 130</span>
          <button className='post-button'>Add to shipping</button>
        </article>
      </div>
      <h2 className=''>Your favorites:</h2>
      <div className='posts'>
        <article>
          <img className='img-posts' src={HomeImg}></img>
        </article>
        <article>
          <img className='img-posts' src={HomeImg}></img>
        </article>
        <article>
          <img className='img-posts' src={HomeImg}></img>
        </article>
        <article>
          <img className='img-posts' src={HomeImg}></img>
        </article>
      </div>
      <h2 className=''>Most views</h2>
      <div className='posts'>
        <article>
          <img className='img-posts' src={HomeImg}></img>
        </article>
        <article>
          <img className='img-posts' src={HomeImg}></img>
        </article>
        <article>
          <img className='img-posts' src={HomeImg}></img>
        </article>
        <article>
          <img className='img-posts' src={HomeImg}></img>
        </article>
      </div>
    </section>
  )
}

export default Post
