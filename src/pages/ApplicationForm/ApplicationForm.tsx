import { useState } from "react";
import UploadImage from "../../components/UploadImage/UploadImage"
import PersonalInfo from "../../components/PersonalInfo/PersonalInfo";
import Profile from "../../components/Profile/Profile";

const ApplicationForm = () => {
  const [personalInfo, setPersonalInfo] = useState<String>('');
  const handleSavePersonalInfo = (img:String) =>{
    if(img) setPersonalInfo(img);
  }
  // if(personalInfo) console.log(personalInfo);
  return (
    <div>
      <UploadImage onSaveImage={handleSavePersonalInfo}/>
      <PersonalInfo />
      <Profile />
    </div>
  )
}

export default ApplicationForm