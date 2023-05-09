import React from 'react'
import { useParams } from 'react-router-dom';
import { blogData } from '../../utils/Data';

const SingleBlog = () => {
  const { id } = useParams();
  const details = blogData?.find((detail) => detail.id === id);
  const {
    name,
    type,
    description,
    website,
    code,
    li1,
    li2,
    li3,
    li4,
    li5,
    li6,
    li7,
  } = details;
  return (
    <div>SingleBlog</div>
  )
}

export default SingleBlog