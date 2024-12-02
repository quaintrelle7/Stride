"use client";
import React, { useEffect, useMemo } from "react";
import { useSession, signOut } from "next-auth/react";
import { LoginButton } from "./components/LoginButton";
import { useOkto, OktoContextType, BuildType } from "okto-sdk-react";
import GetButton from "./components/GetButton";
import TransferTokens from "./components/TransferTokens";
import { useAppContext } from "./components/AppContext";
import AuthButton from "./components/AuthButton";
import SendRawTransaction from "./components/SendRawTransaction";
import GoogleFitSteps from "./components/GoogleFitSteps";
import HomePage from "./components/Home/Homepage";
import JoinChallenge from "./components/Challenges/JoinChallenge";
import LandingPage from "./components/Home/LandingPage";

export default function Home() {
  const { data: session } = useSession();
  const { apiKey, setApiKey, buildType, setBuildType } = useAppContext();
  const {
    isLoggedIn,
    authenticate,
    authenticateWithUserId,
    logOut,
    getPortfolio,
    transferTokens,
    getWallets,
    createWallet,
    getSupportedNetworks,
    getSupportedTokens,
    getUserDetails,
    orderHistory,
    getNftOrderDetails,
    showWidgetModal,
    getRawTransactionStatus,
    transferTokensWithJobStatus,
    transferNft,
    transferNftWithJobStatus,
    executeRawTransaction,
    executeRawTransactionWithJobStatus,
    setTheme,
    getTheme,
  } = useOkto() as OktoContextType;
  const idToken = useMemo(() => (session ? session.id_token : null), [session]);

  async function handleAuthenticate(): Promise<any> {
    if (!idToken) {
      return { result: false, error: "No google login" };
    }
    return new Promise((resolve) => {
      authenticate(idToken, (result: any, error: any) => {
        if (result) {
          console.log("Authentication successful");
          resolve({ result: true });
        } else if (error) {
          console.error("Authentication error:", error);
          resolve({ result: false, error });
        }
      });
    });
  }

  async function handleLogout() {
    try {
      logOut();
      return { result: "logout success" };
    } catch (error) {
      return { result: "logout failed" };
    }
  }

  

  useEffect(() => {
    if (isLoggedIn) {
      console.log("Okto is authenticated");
    }
  }, [isLoggedIn]);

  return (
    <>
                   {/* <GoogleFitSteps authToken={idToken}></GoogleFitSteps> */}


      <LandingPage/>

    

    </>
  );
}
