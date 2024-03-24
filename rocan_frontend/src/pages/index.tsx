import NavigationButtons from "@/components/never/NavigationButtons";
import PageHeader from "@/components/pageLayout/PageHeader";
import { FC } from "react";
import "./App.css";

const Home: FC = () => {
  return (
    <>
      <PageHeader title={"トップ"} />
      <NavigationButtons />
    </>
  );
};
export default Home;
