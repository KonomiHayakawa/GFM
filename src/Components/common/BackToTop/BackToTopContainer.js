import React, {useState} from 'react'
import BackToTop from './BackToTop'

const BackToTopContainer = (props) => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  }

  const goToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  window.addEventListener('scroll', checkScrollTop)

  return (
    <BackToTop
      goToTop={goToTop} 
      showScroll={showScroll}
    />
  )
}

export default BackToTopContainer