import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { InputGroup, FormControl, Dropdown, ButtonGroup } from 'react-bootstrap';
import { BsSearch, BsBrightnessHigh, BsStar, BsCalendar, BsGearFill, BsList, BsCircleHalf, BsCheckCircle, BsLightningFill, BsAlarmFill, BsStopwatchFill } from 'react-icons/bs';
import { BrowserRouter, Link } from "react-router-dom";

function App() {

	var [backgroundImage, setbackgroundImage] = useState('monument_valley_navajo_arizona.jpg')
	var [displayBackgroundMenu, setdisplayBackgroundMenu] = useState('none');

	function wallpaper(e){
		setbackgroundImage(e.target.id+'.jpg')
	}

	function greet(){
		let d = new Date();
		if (d.getHours() < 12){
			return 'Good Morning'
		}
		else if(d.getHours() < 18){
			return 'Good Afternoon'
		}
		else{
			return 'Good Evening'
		}
	}

	function today(){
		let d = new Date();
		let month
		switch(d.getMonth()){
			case 0:
				month = 'Jan'
				break;
			case 1:
				month = 'Feb'
				break;
			case 2:
				month = 'Mar'
				break;
			case 3:
				month = 'Apr'
				break;
			case 4:
				month = 'May'
				break;
			case 5:
				month = 'Jun'
				break;
			case 6:
				month = 'Jul'
				break;
			case 7:
				month = 'Aug'
				break;
			case 8:
				month = 'Sep'
				break;
			case 9:
				month = 'Oct'
				break;
			case 11:
				month = 'Nov'
				break;
			default:
				break;
		}
		let day
		switch(d.getDay()){
			case 0:
				day = 'Sunday'
				break;
			case 1:
				day = 'Monday'
				break;
			case 2:
				day = 'Tuesday'
				break;
			case 3:
				day = 'Wednesday'
				break;
			case 4:
				day = 'Thursday'
				break;
			case 5:
				day = 'Friday'
				break;
			case 6:
				day = 'Saturday'
				break;
			default:
				break;
		}
		return (day+',  '+month+' '+d.getDate())
	}

	function useOutsideAlerter(ref) {
		useEffect(() => {
		
			function handleClickOutside(event) {
				if (ref.current && !ref.current.contains(event.target)) {
					setdisplayBackgroundMenu('none')
				}
			}
	  
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		}, [ref]);
	}

	const backgroundImageMenuRef = useRef(null);
  	useOutsideAlerter(backgroundImageMenuRef);

    return (
        <div className="App">
            <BrowserRouter>
				<div className="d-flex" id="wrapper">
					<div className="bg-dark" id="sidebar-wrapper" style={{ borderRight : '!important' }}>
					<InputGroup size="sm" className="mb-3" style={{paddingTop : '10%', paddingLeft : '8%', paddingRight : '8%'}}>
						<InputGroup.Prepend>
						<InputGroup.Text id="inputGroup-sizing-sm"><BsSearch /></InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" style={{maxHeight: '25px'}} />
					</InputGroup>
					<div className="list-group list-group-flush" style={{ maxWidth : '100%' }}>
						<Link to="/tasks" className="list-group-item list-group-item-action bg-dark" style={{color: 'white', fontSize: '15px'}}><BsBrightnessHigh style={{paddingBottom : '1%', marginRight : '5%'}} />Tasks</Link>
						<Link to="/important" className="list-group-item list-group-item-action bg-dark" style={{color: 'white', fontSize: '15px'}}><BsStar style={{paddingBottom : '1%', marginRight : '5%'}} />Important</Link>
						<Link to="/due" className="list-group-item list-group-item-action bg-dark" style={{color: 'white', fontSize: '15px'}}><BsCalendar style={{paddingBottom : '1%', marginRight : '5%'}} />Due</Link>
					</div>
					</div>
					<div style={{width: '-webkit-fill-available', backgroundImage: `url(${require("./wallpapers/"+backgroundImage)})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
						<Dropdown as={ButtonGroup} style={{ position : 'fixed', right : '63px', top : '5px' }}>
							<Dropdown.Toggle id="dropdownSettingsButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" variant="dark"><BsGearFill /></Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item onClick={() => setdisplayBackgroundMenu('inline')}><BsCircleHalf style={{paddingBottom : '1%', marginRight : '5%'}} />Change Background</Dropdown.Item>
								<Dropdown.Item href="#/action-3"><BsCheckCircle style={{paddingBottom : '1%', marginRight : '5%'}} />Hide Completed</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Dropdown as={ButtonGroup} style={{ position : 'fixed', right : '12px', top : '5px' }}>
							<Dropdown.Toggle id="dropdownSortButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" variant="dark"><BsList /></Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1"><BsLightningFill style={{paddingBottom : '1%', marginRight : '5%'}} />Sort by Importance</Dropdown.Item>
								<Dropdown.Item href="#/action-2"><BsAlarmFill style={{paddingBottom : '1%', marginRight : '5%'}} />Sort by Due Date</Dropdown.Item>
								<Dropdown.Item href="#/action-3"><BsStopwatchFill style={{paddingBottom : '1%', marginRight : '5%'}} />Sort by Creation Date</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<div className="triangle-up" style={{ display : displayBackgroundMenu }}></div>
						<div className="displayBackground" style={{ display : displayBackgroundMenu }} ref={backgroundImageMenuRef}>
							<div className="row">
								<input type="radio" onClick={wallpaper} name='wallpaper' id='chamarel_waterfalls_mauritius' className='inp' />
								<label htmlFor="chamarel_waterfalls_mauritius">
									<img src={require('./wallpapers/chamarel_waterfalls_mauritius.jpg')} alt="Cinque Terre" />
								</label>
								<input type="radio" onClick={wallpaper} name='wallpaper' id='coal_mine_canyon_arizona' className='inp' />
								<label htmlFor="coal_mine_canyon_arizona">
									<img src={require('./wallpapers/coal_mine_canyon_arizona.jpg')} alt="Cinque Terre" />
								</label>
								<input type="radio" onClick={wallpaper} name='wallpaper' id='convict_lake' className='inp' />
								<label htmlFor="convict_lake">
									<img src={require('./wallpapers/convict_lake.jpg')} alt="Cinque Terre" />
								</label>
							</div>
							<div className="row">
								<input type="radio" onClick={wallpaper} name='wallpaper' id='island' className='inp' />
								<label htmlFor="island">
									<img src={require('./wallpapers/island.jpg')} alt="Cinque Terre" />
								</label>
								<input type="radio" onClick={wallpaper} name='wallpaper' id='monument_valley' className='inp' />
								<label htmlFor="monument_valley">
									<img src={require('./wallpapers/monument_valley.jpg')} alt="Cinque Terre" />
								</label>
								<input type="radio" onClick={wallpaper} name='wallpaper' id='monument_valley_navajo_arizona' className='inp' />
								<label htmlFor="monument_valley_navajo_arizona">
									<img src={require('./wallpapers/monument_valley_navajo_arizona.jpg')} alt="Cinque Terre" />
								</label>
							</div>
						</div>
						<div className="text-block" style={{ margin : '20%', background: 'linear-gradient(to top, rgba(24, 24, 25, 0.83), rgba(75, 72, 72, 0.5))', color : 'white' }}>
							<h4 style={{ padding : '5px', marginBottom : '0px', textAlign: 'center' }}>{greet()}</h4>
							<p style={{ padding : '5px', marginBottom : '0px', textAlign: 'center' }}>{today()}</p>
						</div>
					</div>
				</div>
			</BrowserRouter>
        </div>
    );
}

export default App;
