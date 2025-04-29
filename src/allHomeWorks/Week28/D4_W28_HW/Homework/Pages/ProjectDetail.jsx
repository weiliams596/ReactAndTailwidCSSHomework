import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { GetProjectionById } from '../Assets/ProjectionsConfig';

export default function ProjectDetail() {
  const { id } = useParams();
  const [projection, setProjection] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectionData = await GetProjectionById(id);
        setProjection(projectionData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);


  useEffect(() => {
    console.log(projection);
  }, [projection]);


  if (!projection) {
    return <div>Loading...</div>
  }
  else{
    return (
      <div>
        {projection && <h1>Project name: {projection.ProjectName}</h1>}
        {projection && <p>Project language: {projection.ProjectLang}</p>}
        {projection && <p>Co-developer(s): {projection.CoDeveloper.join(',')}</p>}
      </div>
    );
  }
}
