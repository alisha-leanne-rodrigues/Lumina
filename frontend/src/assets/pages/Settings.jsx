import "./Settings.css";


const Settings = () => {


  return (

    <div className="settings-page">


      <h1>
        Settings
      </h1>


      <p className="settings-subtitle">
        Manage your account preferences
      </p>



      <div className="settings-card">


        <div className="setting-item">

          <label>
            Full Name
          </label>

          <input
            type="text"
            placeholder="Alisha"
          />

        </div>



        <div className="setting-item">

          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="example@email.com"
          />

        </div>



        <div className="setting-item">

          <label>
            Notification Preference
          </label>


          <select>

            <option>
              Enable Notifications
            </option>

            <option>
              Disable Notifications
            </option>

          </select>


        </div>




        <button>
          Save Changes
        </button>



      </div>


    </div>

  );

};


export default Settings;