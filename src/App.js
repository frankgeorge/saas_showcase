import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Experience The New Way of Trade Automation"
        description="Simple Interface to create Strategies"
        showBtn
        mockupImg={assets.first}
        banner="banner"
      />
      <SectionWrapper 
        title="Experience The New Way of Trade Automation"
        description="Simple Interface to create Strategies"
        mockupImg={assets.second}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Experience The New Way of Trade Automation"
        description="Simple Interface to create Strategies"
        mockupImg={assets.third}
        reverse
      />
      <SectionWrapper 
        title="Simple Interface to create Strategies"
        description="Simple Interface to create Strategies"
        mockupImg={assets.fourth}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span className="bold">Optionables</span>
        </p>
      </div>
    </>
  );
}

export default App;