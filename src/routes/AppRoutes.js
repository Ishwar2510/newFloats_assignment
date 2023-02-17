import {Routes,Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage'
import DetailsPage from '../pages/DetailsPage'



function AppRoutes(){
    return (
        <Routes>
            <Route path = "/" element = {<HomePage/>}></Route>
            <Route path = "/citysearch" element = {<SearchPage/>}></Route>
            <Route path = "/details" element = {<DetailsPage/>}></Route>

        </Routes>
    )
}
export default AppRoutes