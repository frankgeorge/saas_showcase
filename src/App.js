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
        title="Seamless Integration of brokers through API"
        description="Easy to use"
        mockupImg={assets.second}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Superfast Execution"
        description="Determine Entry and Exit criteria with ease"
        mockupImg={assets.third}
        reverse
      />
      <SectionWrapper 
        title="Automate with a single click"
        description="Pre-train strategies and excute on select date and time"
        mockupImg={assets.fifth}
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