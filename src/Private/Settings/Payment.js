import Settings from "./Settings";

function Payment(){

    return(
        <>
        <Settings/>
        <div className="account" style={{backgroundColor:"white"}}>
           <div className="a-left">

           </div>
           <div className="a-right">
           <h2>My Profile</h2>
            <form className='a-form'>
                <div>
                <label>Language </label>
                <input className='account-name' type="text" placeholder="Please enter your first name" />
                </div>

              <select className="select">
                <option value="day">Day</option>
                <option value="day">Night</option>
              </select>
               

  <div className='btn-wrapper'>
    <button type='submit'>Save changes</button>
  </div>
            </form>
           </div>
        </div>
        </>
    )
}
export default Payment;