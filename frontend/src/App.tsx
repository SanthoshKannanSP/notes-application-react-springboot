import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import {Navigate, Route, Routes} from 'react-router-dom'
import CreateNotePage from './CreateNotePage'
import NoteListPage from "./NoteListPage"
import ShowNotePage from './ShowNotePage'
import EditNotePage from './EditNotePage'

function App(){
  return (
    <Container className='my-4'>
      <Routes>
        <Route path='/' element={<NoteListPage />} />
        <Route path='/new' element={<CreateNotePage/>} />
        <Route path='/:id'>
          <Route index element={<ShowNotePage />} />
          <Route path='edit' element={<EditNotePage />} />
        </Route>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App