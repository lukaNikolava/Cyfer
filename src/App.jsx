import { HomeComponent } from './components/HomeComponent'
import {StatisticComponent} from './components/StatisticComponent'
import { DiscoverCryptocurrency } from './components/DiscoverCryptocurrencyComponent'
import { OurProductComponent } from './components/OurProductComponent'
import { OurServicesComponent } from './components/OurServicesComponent'
import { ClientsCommentsComponent } from './components/ClientsCommentsComponent'
import { ResourcesComponent } from './components/ResourcesComponent'
import { LatestNevsComponent } from './components/LatestNewsComponent'
import { FormComponent } from './components/FormComponent'
import { FooterComponent } from './components/FooterComponent'
import './App.css'

function App() {
  return (
    <>
      <HomeComponent/>
      <StatisticComponent/>
      <DiscoverCryptocurrency/>
      <OurProductComponent/>
      <OurServicesComponent/>
      <ClientsCommentsComponent/>
      <ResourcesComponent/>
      <LatestNevsComponent/>
      <FormComponent/>
      <FooterComponent/>
    </>
  )
}

export default App
