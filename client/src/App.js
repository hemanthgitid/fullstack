import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import CourseList from './components/CourseList';
import StudentForm from './components/StudentForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path='/register' element={<StudentForm />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
