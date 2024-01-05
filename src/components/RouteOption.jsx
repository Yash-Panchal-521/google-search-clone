import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Results from './Results'

const RouteOption = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path='/' element={<Navigate to='/websearch' />} />
        <Route path='/websearch' element={<Results />} />
        <Route path='/imagesearch' element={<Results />} />
        <Route path='/videosearch' element={<Results />} />
      </Routes>
    </div>
  )
}

export default RouteOption