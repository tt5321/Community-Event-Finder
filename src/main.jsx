import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EventFinderPage from './pages/EventFinderPage.jsx'
import CreateEventPage from './pages/CreateEventPage.jsx'
import DeleteEventPage from './pages/DeleteEventPage.jsx'

import { BrowserRouter, Routes, Route } from "react-router";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Community-Event-Finder">
      <Routes>
        <Route path="/" element={<EventFinderPage />} />
        <Route path="/create_event" element={<CreateEventPage />} />
        <Route path="/delete_event" element={<DeleteEventPage />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>
)
