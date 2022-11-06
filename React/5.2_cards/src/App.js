import './App.css';
import Card from './Components/card'
import Img from './Components/Img';
import Title from './Components/Titels';
import Footer from "./Components/Footer"
function App() {
  return (
    <div className='App-header '>
     <Card padding={'10px'} color={'black'} background={'white'} margin={'15px'}>
      <Img  width={'450px'} height={'300px'} img='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'/>
      <Title h3Title={'A Random Title1'} description={'Random description1'}/>
      <Footer url={'https://www.w3schools.com'} firstText={'SHARE1'} secondText={'EXPLORE1'} clas={'footer'}/>
     </Card>
     <Card  padding={'10px'} color={'black'} background={'white'} margin={'15px'}>
      <Img width={'450px'} height={'300px'} img='https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg'/>
      <Title h3Title={'A Random Title2'} description={'Random description2'}/>
      <Footer url={'https://www.w3schools.com'} firstText={'SHARE2'} secondText={'EXPLORE2'} clas={'footer'}/>
     </Card>
     <Card padding={'10px'} color={'black'} background={'white'} margin={'15px'}>
      <Img width={'450px'} height={'300px'} img='https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg'/>
      <Title h3Title={'A Random Title3'} description={'Random description3'}/>
      <Footer url={'https://www.w3schools.com'} target={'_blank'} firstText={'SHARE3'} secondText={'EXPLORE3'} clas={'footer'}/>
     </Card>
    </div>
  )
}
export default App;
