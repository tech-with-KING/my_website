import React from 'react';
import './index.css'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
const Articles = (props) => {
	const [toggle, settoggle] = useState(false)
	const { ref: article_ref, inView: article_view } = useInView()
	const { ref: projec_ref, inView: project_view } = useInView()
	return (
		<div className='article_container'>

			<div className='_article_div'>
				<p>
					lorem20 dkddd ff djdjfidj 

	    </p>
	
			</div>
			<div className='_menue'>
				<ul>
					<li>this day in june</li>
					<li> this day in may</li>
					<li> from home with love</li>
					<li> fight for your right</li>
				</ul>
			</div>


		</div>
	)
}
export default Articles;


