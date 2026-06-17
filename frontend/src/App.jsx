import React from 'react'

const App = () => {
  return (
    <>
     <h1>AI Blogs</h1>
    <p>A list of AI Blog topics</p>
    <ul>
      <li>Introduction to Machine Learning</li>
      <li>Deep Learning Applications</li>
      <li>Natural Language Processing</li>
      <li>Computer Vision Techniques</li>
      <li>Reinforcement Learning in AI</li>
      <li>Generative Adversarial Networks (GANs)</li>
      <li>AI Ethics and Responsible AI</li>
      <li>AI in Healthcare</li>
      <li>AI in Finance and Business</li>
      <li>Future Trends in Artificial Intelligence</li>
    </ul>

    <form>
      <h4>Contact Form</h4>
<input type="text" placeholder="Enter your name" /> 
<input type="email" placeholder="Enter your email" />

<input type="text" placeholder="Enter your message" />

<button type="submit">Submit</button> 
    </form>
    </>

  )
}

export default App
