import SettingsChange from "../../Components/SettingChange/SettingChange";
import CountryChange from "../../Components/CountrySetting/CountrySetting";
import PasswordChange from "../../Components/PasswordChange/PasswordChange";

import {
  GoogleContainer,
  Text,
  Header,
  Par,
  SignInWithGoogle,
} from "./AccountPage.styled";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithGooglePopup,
  signInWithFacebookPopup,
} from "Features/Authentication/Utils/Firebase";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { loginWithGoogle } from "Features/Authentication/Services/authApi";
import { useState, useEffect } from "react";

const AccountPage = () => {
  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const auth = useAuth();
  const [signupSubmit, setSignupSubmit] = useState(false);

  useEffect(() => {
    if (signupSubmit) {
      setSignupSubmit(false);
      // console.log("out useEffect", data);
      if (!error && data.token) {
        auth.login(data);
      }
    }
  }, [data]);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    loginWithGoogle(dataFetch, {
      type: "gmail",
      googleOrFacebookToken: user.accessToken,
    });

    setSignupSubmit(true);
  };

  return (
    <>
      <SettingsChange
        header={"Email address"}
        content={"muhammadwalidmido@gmail.com not verified!"}
      />

      <PasswordChange
        header={"Change password"}
        content={"Password must be at least 8 characters long"}
      />

      <CountryChange
        header={"Country"}
        content={"This is your primary location."}
      ></CountryChange>

      <GoogleContainer>
        <Text>
          <Header>Connect to Google</Header>
          <Par>Connect account to log in to Reddit with Google</Par>
        </Text>
        <SignInWithGoogle>
          <button onClick={() => logGoogleUser()}>
            <FcGoogle size={22} />
            <span> CONTINUE WITH GOOGLE</span>
          </button>
        </SignInWithGoogle>
      </GoogleContainer>
    </>
  );
};

export default AccountPage;
