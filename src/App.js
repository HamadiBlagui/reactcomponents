import './App.css';
import Address from './Components/Profil/Address';
import DateofBirth from './Components/Profil/DateofBirth';
import FullName from './Components/Profil/FullName';
import Gender from './Components/Profil/Gender';
import Nationality from './Components/Profil/Nationality';
import ProfilePhoto from './Components/Profil/ProfilePhoto.js';

function App() {
  return (
    <div className="App">
      <div className="test1">
      <ProfilePhoto/>

      </div>
     
     <div className="Name">
     <FullName/>
     </div>
     <div className="Rest">

     <Address/>
     <Gender/>
     <Nationality/>
     <DateofBirth/>
     </div>
     
    </div>
  );
}

export default App;
