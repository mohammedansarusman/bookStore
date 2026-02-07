import { SideBar } from "../components/sidebar/SideBar";

export const metadata = {
  title: "Sell/Buy books online",
  description: "Online Books",
};

export default function BookStoreLayout({ children }) {
  return (
    <div className="flex w-full min-h-screen gap-3">
        <SideBar /> 
        {children}
    </div>
  );
}
