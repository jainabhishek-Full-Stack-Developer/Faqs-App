import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="container">
        <div className="cardContainer">
          <h1 className="mainHeading">FAQs</h1>
          <ul className="faqsList">
            {faqsList.map(eachItem => (
              <FaqItem key={eachItem.id} faqDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
