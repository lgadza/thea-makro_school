// src/components/Dashboard.tsx
import React, { useState } from 'react';
import ResourceSearch from './ResourceSearch';
import ResourceCard from './ResourceCard';
import ResourceUploadForm from './ResourceUploadForm';
interface Resource {
    id: number;
    title: string;
    thumbnail: string;
    description:string;
    tags:[];
    reviews:[];
    rating:number
  }
  
const Dashboard: React.FC = () => {
  // Assuming you have some data for favorite resources and recent activity
  const resources:Resource[] = [
    { id: 1, title: 'Resource 1', thumbnail: 'https://media.wired.com/photos/598e35994ab8482c0d6946e0/master/w_2560%2Cc_limit/phonepicutres-TA.jpg',description:"", tags:[],reviews:[],rating:3},
    { id: 2, title: 'Resource 2', thumbnail: 'https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg',description:"", tags:[],reviews:[],rating:3},
    
  ];

  const recentActivity = [
    { id: 1, action: 'Uploaded a resource', timestamp: '2023-07-12 10:30 AM' },
    { id: 2, action: 'Rated a resource', timestamp: '2023-07-11 02:45 PM' },
    // Add more data...
  ];
 const [favoriteResources, setFavoriteResources] = useState<number[]>([1,2]);
   // Function to handle favorite toggle
   const onFavoriteToggle = (id: number, isFavorite: boolean) => {
    if (isFavorite) {
      // Add resource to favorites
      setFavoriteResources((prevFavorites) => [...prevFavorites, id]);
    } else {
      // Remove resource from favorites
      setFavoriteResources((prevFavorites) => prevFavorites.filter((favId) => favId !== id));
    }
  };

  // Function to handle sharing
  const onShare = (id: number) => {
    // Implement sharing logic here (e.g., open a share modal or send resource link to others)
    alert(`Share resource with ID ${id}`);
  };
// The RESOURCE UPLOAD FORM
const [addResources, setAddResources] = useState<Resource[]>([]);

  const handleResourceUpload = (title: string, description:string, file: File, tags: string[]) => {
    // Implement the resource upload logic here
    // For example, you can upload the resource to a server and get a response with the resource details
    // Then, add the new resource to the resources array
    const newResource: Resource = {
      id: addResources.length + 1,
      title,
      thumbnail: URL.createObjectURL(file),
      description: 'Sample description for the uploaded resource.',
      tags:[],
      rating: 0,
      reviews: [],
    };

    setAddResources([...resources, newResource]);
  };
// The RESOURCE UPLOAD FORM


  return (
    <div className="dashboard container t-5">
        <ResourceSearch/>
      <h5 className='d-flex'>Dashboard</h5>
      <div className="mt-4">
        <h6 className='d-flex'>Favorite Resources</h6>
        <div className="row">
          {resources.map((resource) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={resource.id}>
              <ResourceCard id={resource.id} title={resource.title} thumbnail=
             {resource.thumbnail} isFavorite={true} onShare={onShare} onFavoriteToggle={onFavoriteToggle}/>
            </div>
          ))}
        </div>
      </div>
      <div className="recent-activity-sticky">
        <span>Recent Activity</span>
        <ul className="content_bg">
          {recentActivity.map((activity) => (
            <li  key={activity.id}>
              <small className='text-small nowrap  text-muted'>{activity.action}- {activity.timestamp} </small> 
            </li>
          ))}
        </ul>
      </div>
      <ResourceUploadForm onResourceUpload={handleResourceUpload}/>
    </div>
  );
};

export default Dashboard;
