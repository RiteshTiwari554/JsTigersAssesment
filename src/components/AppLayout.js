import React from 'react'
import '../css/applayout.css';
import Navbar from './Navbar';
import LeftPanel from './LeftPanel';
import ship from '../utils/redship.png';
import plane from '../utils/plane.png';
import truck from '../utils/truck.png';
import Analytics from './Analytics';

const AppLayout = () => {
  return (
    <div className='applayout'>
        <div className='analyticsnavbar'>
               <div className='pienav1 pieshiptxt analyticsship'>
                    <img src={ship} className='analyticsimgship' alt='ship'/>
                    <strong className='pienav1txt'>Sea</strong>
               </div>
               <div className='pienav1'>
                    <img src={plane} className='analyticsimgship' alt='ship'/>
                    <strong className='pienav1txt'>Air</strong>
               </div>
               <div className='pienav1'>
                    <img src={truck} className='analyticsimgship' alt='ship'/>
                    <strong className='pienav1txt'>Land</strong>
               </div>
        </div>
        <div className='Shimpmentcontainer'>
            <div className='frame803a'>
                <div className='frame796a'>
                    <strong className='shipmtxt'>
                    Shipments
                    </strong>
                </div>
                <div className='frame798a'>
                <strong className='shipmtxt'>
                    Containers
                    </strong>                  
                </div>
            </div>
        </div>
        <div className='oulettanalytics'>
            <Analytics/>

        </div>
    </div>
  )
}

export default AppLayout