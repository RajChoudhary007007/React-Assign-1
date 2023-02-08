import {Component} from 'react'

import HistoryItem from './components/HistoryItem'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    userSearch: '',
    historyDetails: initialHistoryList,
  }

  onChangeSearch = event => {
    this.setState({userSearch: event.target.value})
  }

  itemDelete = id => {
    const {historyDetails} = this.state
    const updatedHistory = historyDetails.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState({historyDetails: updatedHistory})
  }

  getRenderItem = searchResult => (
    <>
      {searchResult.map(eachHistory => (
        <HistoryItem
          key={eachHistory.id}
          eachHistory={eachHistory}
          itemDelete={this.itemDelete}
        />
      ))}
    </>
  )

  getRenderNoPage = () => (
    <p className="discription-heading">There is no history to show</p>
  )

  getRenderHistory = () => {
    const {historyDetails, userSearch} = this.state
    const searchResult = historyDetails.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(userSearch),
    )
    const searchCount = searchResult.length
    console.log(searchCount)

    return (
      <>
        {searchCount > 0
          ? this.getRenderItem(searchResult)
          : this.getRenderNoPage()}
      </>
    )
  }

  render() {
    const {userSearch} = this.state

    return (
      <div className="app-container">
        <div className="home-container">
          <div className="header-container">
            <img
              className="app-logo"
              alt="app logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            />
            <div className="search-container">
              <img
                className="search-logo"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
              <input
                type="search"
                className="user-input"
                placeholder="search-history"
                value={userSearch}
                onChange={this.onChangeSearch}
              />
            </div>
          </div>

          <ul className="item-container">{this.getRenderHistory()}</ul>
        </div>
      </div>
    )
  }
}

export default App
