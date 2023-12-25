import React from 'react';
import './index.css'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import APP from "./code_block"
import { useAnimation } from "framer-motion"
import transition from '../transition';
const Articles = (props) => {
	const blogsData = [
		{
		  id: 1,
		  title: 'My Blog 1',
		  imageSrc: 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=st=1687123388~exp=1687123988~hmac=f3410d0a5c2f20aec66c7d763c789bf0aae9c5026366fe41ae7d18e05e7e406b',
		  content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.',
		},
		{
		  id: 2,
		  title: 'My Blog 2',
		  imageSrc: 'https://img.freepik.com/free-photo/beautiful-aerial-shot-fronalpstock-mountains-switzerland-beautiful-pink-blue-sky_181624-9315.jpg?w=900&t=st=1687123407~exp=1687124007~hmac=15a1b5a4d3a5af66dfba67bdcd577f769f813bf06fc8b5e50f32f6503099bbd8',
		  content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.',
		},
		{
		  id: 3,
		  title: 'My Blog 3',
		  imageSrc: 'https://img.freepik.com/free-photo/tropical-beach_74190-188.jpg?w=1800&t=st=1687169672~exp=1687170272~hmac=b66f9b9c1e344cbfe6fe2e5f65e94ebb8d418dad2e2af2b892ad9ac60e9eb79c',
		  content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.',
		},
		{
		  id: 4,
		  title: 'My Blog 4',
		  imageSrc: 'https://img.freepik.com/free-photo/pathway-middle-green-leafed-trees-with-sun-shining-through-branches_181624-4539.jpg?w=900&t=st=1687123477~exp=1687124077~hmac=6e8b1735a2cb25be79f248b6a3307a37a15b080dee114565d01704b97d432a80',
		  content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.',
		},
		{
		  id: 5,
		  title: 'My Blog 5',
		  imageSrc: 'https://img.freepik.com/free-photo/beautiful-paradise-island-with-beach-sea_74190-1023.jpg?w=1800&t=st=1687169691~exp=1687170291~hmac=7a65a4e5b2eb374e94e17fd7fb2ab0d1b7b7aaf83078cd62ed5d0a84b66d5beb',
		  content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.',
		},
		{
		  id: 6,
		  title: 'My Blog 6',
		  imageSrc: 'https://img.freepik.com/free-photo/empty-wood-chair-table-outdoor-patio-with-beautiful-tropical-beach-sea_74190-9961.jpg?w=1800&t=st=1687169720~exp=1687170320~hmac=0a77994214a9019510f28af43dab452ada527e96585d6e7f563a09995598851e',
		  content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent in mauris eu tortor porttitor accumsan.',
		},
	  ];
	  
	  
		return (
		  <div className="background">
			<div className="centering">
			  <div className="articles">
				{blogsData.map(blog => (
				  <article key={blog.id}>
					<figure>
					  <img src={blog.imageSrc} alt="Preview" />
					</figure>
					<div className="article-preview">
					  <h2>{blog.title}</h2>
					  <p>
						{blog.content}
						<a href="#" className="read-more" title="Read More">
						  Read more
						</a>
					  </p>
					</div>
				  </article>
				))}
			  </div>
			</div>
		  </div>
		);
}
export default Articles;




