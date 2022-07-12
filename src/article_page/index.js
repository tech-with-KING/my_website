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
		<div className='articulate'>

			<div className='articlate_con'>
				<p>
					lorem20 dkddd ff djdjfidj fdjfidjf d djfsdus sdj bjddjdjdkdud sjfdfjf bdjfkdkdjf dfsjfdjfldidj

				</p>
			</div>
			<div className='list_menue'>
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


