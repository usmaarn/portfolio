import Navbar from '@/components/Navbar';
import {AppContext} from '@/utils/appContext';
import { Component } from 'react';
import 'styles/globals.css';


class MyApp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      darkMode: true,
    }
  }

  toggleTheme = () => this.setState({darkMode: !this.state.darkMode})

  render() {

    const { Component, pageProps } = this.props;
    const appClassName = this.state.darkMode ? 'dark' : '';
    const contexts = {...this.state, 
      toggleTheme: this.toggleTheme
    }

    return(
      <AppContext.Provider value={contexts}>
        <div className={appClassName}>
          <div className='min-h-screen dark:bg-gray-900 dark:text-white transition duration-500'>
            {/* <Navbar /> */}
            <Component {...pageProps} />
          </div>
        </div>
      </AppContext.Provider>
    )
  }
}

export default MyApp
