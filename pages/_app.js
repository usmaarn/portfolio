/** @format */

import { AppContext } from "@/utils/appContext";
import "styles/globals.css";

export default function MyApp() {
  return (
    <AppContext.Provider>
      <div cclassName="bg-[#2D2A23  ]">
        <div className="">
          <Component {...pageProps} />
        </div>
      </div>
    </AppContext.Provider>
  );
}
