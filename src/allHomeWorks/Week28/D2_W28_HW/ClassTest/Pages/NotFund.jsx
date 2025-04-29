import React from 'react'

import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/CT8');
  }, 1500);
  return <div>This is the 404 page</div>;
}
