import { MailOutline, Message } from '@mui/icons-material';
import { motion } from 'framer-motion'
import React from 'react';
import './bottom_bar.css'
import { GitHub, Twitter, LinkedIn, Send, YouTube, ArrowCircleUp} from '@mui/icons-material';
import Menue_Bar from '../nav/menue'
const DownBar = ({value}) => {

	const colors = ['rgb(12,28,37)', '#268BD2', '#2AA198', '#3490A7', '#BED9E0'];
	const text_colors = ['rgb(134,255,175)', '#0A1C2A', '#052D2A', '', '#377788'];
	const animae = [



		{
			id: 1,
			color: 'about_heading',
			item: <GitHub style={{ color: '#00ACEE' }}/>
		},
		{
			id: 2,
			color: 'about_heading',
			item: <Twitter style={{ color: '#00ACEE' }} />,
		},
		{
			id: 3,
			color: 'about_heading',
			item: <MailOutline style={{ color: '#DB4437' }} />

		},

		{
			id: 4,
			color: 'about_heading',
			item: <LinkedIn style={{ color: '#0072b1' }} />
		},
		{
			id: 5,
		       	color: 'about_heading',
			item: <YouTube style={{ color: '#FF0000' }} />
		}
	]
	return (
		<div className='downcomponent' style={{ backgroundColor: colors[value] }}>
			<div className='extra_contents'>
				<button>Get Great Project Recommendations</button>
			</div>
		<div className='menue_bottom'>
				<Menue_Bar />

				<img className='logo' src='/img/mormon.png' alt='logo' />
			</div>
			<div className='our_socials'>
				<>
					<button>Contact Us :</button>
					<ul>
						{
							animae.map((anim, i) => {
								return (
									<motion.div href="#" className='div'
										key={anim.id}
										initial={{ opacity: 0, translateX: -40 }}
										animate={{ opacity: 1, translateX: 0 }}
										transition={{ duration: 0.5, delay: i * 0.5 }}
									>{anim.item}</motion.div>
								)
							})
						}
					</ul>
				</>
				<div className='modals'>
					<a href='#' className='goto_top'>
						<ArrowCircleUp style={{ color: 'aqua', fontSize: '40px', margin: "5px" }} />
					</a>
					<div className='message'>
						<Send style={{ fontSize: '30px', color: "aqua" }} />
					</div>
				</div>
			</div>
			<div className='text'>
				<p>copyright: Algophile.com 2021</p>
				<p>Email: kingsley@algophile.com
				</p>
				<p>This website was made responsively  with Reactjs
				</p>
			</div>
			<div className='disclaimer'>
				<p>Web #.

				</p>
			</div>

		</div>
	)

}
export default DownBar;
