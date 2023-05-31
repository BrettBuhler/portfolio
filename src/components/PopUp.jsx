
const PopUp = ({popup, setPopup})=>{

    const handleClose = () =>{
        setPopup(false)
    }
    return (
        <>

            {popup && (<div className='popup-container'>
                <div className="popup">
                    <h2 className="popup-h2">Thank you for the visit!</h2>
                    <p className="popup-p">This site is out of date, visit my current portfolio at the link below</p>
                    <div className="popup-button-div">
                        <button onClick={(()=>console.log('hi'))} className="popup-button">brettbuhler.com</button>
                        <button onClick={handleClose} className="popup-button">Close</button>
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default PopUp